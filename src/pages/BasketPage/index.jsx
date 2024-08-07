import Layout from "../../components/Layout"


const BasketPage = () => {
  return (
    <Layout>
        <main className="basketPage">
            <div className="container">
            <h1>Basket</h1>
            <div className="basket">
                <table className="table table-bordered table-striped"></table>
            </div>
            </div>
        </main>
    </Layout>
  )
}

export default BasketPage