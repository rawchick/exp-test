import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Nav } from './Nav'
import { Layout } from 'antd'
const Dashboard = () => {
    return <h1>{`Dashboard`}</h1>
}

const User = () => {
    return <h1>{`User`}</h1>
}

const Todo = () => {
    return <h1>{`Todo`}</h1>
}

const Chart = () => {
    return <h1>{`Chart`}</h1>
}

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Layout>
                        <Nav />
                        <Route exact path='/'>
                            <Layout.Content>
                                <Dashboard />
                            </Layout.Content>
                        </Route>
                        <Route path='/user'>
                            <Layout.Content>
                                <User />
                            </Layout.Content>
                        </Route>
                        <Route path='/todo'>
                            <Layout.Content>
                                <Todo />
                            </Layout.Content>
                        </Route>
                        <Route path='/chart'>
                            <Layout.Content>
                                <Chart />
                            </Layout.Content>
                        </Route>
                    </Layout>
                </Switch>
            </BrowserRouter>
        </>
    )
}

