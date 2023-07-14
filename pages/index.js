import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import Featured from "@/components/Featured";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";


const inter = Inter({ subsets: ['latin'] })

export default function Home({product}) {
    console.log(product);
  return (
    <div>
      <Header />
        <Featured product={product}/>
        <NewProducts />
    </div>
  )
}

export async function getServerSideProps() {
    const featuredProductId = '64aeb433c025a33a1d2eb41e';
    await mongooseConnect();
    const featuredProduct = await Product.findById(featuredProductId);
    const newProducts = await Product.find({}, null, {sort: {'_id':-1}})
    return {
        props: {
            product: JSON.parse(JSON.stringify(featuredProduct)),
            newProducts: JSON.parse(JSON.stringify(newProducts)),
        },
    }
}
