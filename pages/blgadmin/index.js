import Layout from '../../components/layouts/AdminLayout'
import Link from 'next/link'

const Dashboard = () => {
    return (
        <Layout title="">
            <h2>Admin</h2>
            <Link href={`/blgadmin/post/add`}>
                <a>
                    add post
                </a>
            </Link>
        </Layout>
    )
}

export default Dashboard
