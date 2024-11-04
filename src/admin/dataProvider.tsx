import simpleRestProvider from 'ra-data-simple-rest';
import  { GetListResult } from 'react-admin'
const enhancedDataProvider = (apiUrl: string) => {
    const dataProvider = simpleRestProvider(apiUrl);

    return {
        ...dataProvider,
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
