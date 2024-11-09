import simpleRestProvider from 'ra-data-simple-rest';
import { GetListResult } from 'react-admin';

const enhancedDataProvider = (apiUrl: string) => {
    const dataProvider = simpleRestProvider(apiUrl);

    return {
        ...dataProvider,
        
        create: async (resource: string, params: any) => {
            if (resource === 'pet' && params.data.images_url) {
                const formData = new FormData();
                for (const key in params.data) {
                    if (key === 'images_url') {
                        params.data.images_url.forEach((file:any) => {
                            if (file.rawFile instanceof Blob) {
                                const utf8Title = btoa(unescape(encodeURIComponent(file.title)));
                                formData.append('images_url', new File([file.rawFile], utf8Title, { type: file.rawFile.type }));                                                            }
                        });
                    } else {
                        formData.append(key, params.data[key]);
                    }
                }
        
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
