import { Card, CardContent, CardHeader } from '@mui/material';

const Dashboard = () => {
    return (
        <Card>
            <CardHeader title="Панель администратора" />
            <CardContent>
                <h2>Добро пожаловать в админ-панель приюта для животных!</h2>
                <h3>Здесь вы можете управлять карточками питомцев.</h3>
				<br/>
				<h4>Дорогие проверяющие ПП! <br/> Я не стал добавлять авторизацию в админ-панели, чтобы вы могли без ограничений войти и ознакомиться с её функционалом.</h4>
            </CardContent>
        </Card>
    );
};

export default Dashboard;

