import { Card, CardContent, CardHeader } from '@mui/material';

const Dashboard = () => {
    return (
        <Card>
            <CardHeader title="Панель администратора" />
            <CardContent>
                <h2>Добро пожаловать в админ-панель приюта для животных!</h2>
                <p>Здесь вы можете управлять карточками питомцев.</p>
            </CardContent>
        </Card>
    );
};

export default Dashboard;

