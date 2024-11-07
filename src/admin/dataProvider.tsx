import simpleRestProvider from 'ra-data-simple-rest';
import { GetListResult } from 'react-admin';

const enhancedDataProvider = (apiUrl: string) => {
    const dataProvider = simpleRestProvider(apiUrl);

    return {
        ...dataProvider,
        
        create: async (resource: string, params: any) => {
            if (resource === 'pet' && params.data.images) {
                const formData = new FormData();
                for (const key in params.data) {
                    if (key === 'images') {
                        params.data.images.forEach((file:any) => {
                            if (file.rawFile instanceof Blob) {
                                formData.append('images', file.rawFile, file.title);
                            }
                        });
                    } else {
                        formData.append(key, params.data[key]);
                    }
                }

                for (let pair of formData.entries()) {
                    console.log(pair[0]+ ', ' + pair[1]);
                }
                console.log(formData);
        
                const url = `${apiUrl}/${resource}`;
        
                const response = await fetch(url, {
                    method: 'POST',
                    body: formData,
                });
        
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
        
                const result = await response.json();
                return { data: { ...params.data, id: result.id } };
            }
        
            return dataProvider.create(resource, params);
        },
        

        getList: (resource: string, params: any): Promise<GetListResult> => {
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;

            const query = {
                sort: field,
                order: order,
                page: page,
                perPage: perPage,
                filter: JSON.stringify(params.filter), 
            };

            // Конструируем URL
            const url = `${apiUrl}/${resource}?${new URLSearchParams(query as any).toString()}`;
            return fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data: any[]) => {
                    // Преобразуем данные в нужный формат
                    return {
                        data: data,
                        total: data.length,
                    };
                });
        },
    };
};

export default enhancedDataProvider('http://localhost:8080/api');
