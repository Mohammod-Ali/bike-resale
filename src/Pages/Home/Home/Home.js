import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import PrivateRoute from '../../../Routes/PrivateRoute/PrivateRoute';
import Banner from '../Banner/Banner';
import BikeCard from '../BikeCard/BikeCard';
import BookingModal from '../BookingModal/BookingModal';
import Categories from '../Categories/Categories';
import CategoryCart from '../CategoryCart/CategoryCart';



const Home = () => {
    // const [bikes, setBikes] = useState()
    const [category, setCategory] = useState('')
console.log(category)
    const [bikeModal, setBikeModal] = useState(null)
 
    const {data: bikes = [], refetch } = useQuery({
        queryKey: ["bikeCollections"],
        queryFn: () => fetch('http://localhost:5000/bikeCollections')
        .then(res => res.json())
    })

    // const {data: bikes = [], isLoading, refetch} = useQuery({
    //     queryKey: ["bookings", category],
    //     queryFn: () => fetch(`http://localhost:5000/bikeCollections?category=${category}`).then(res => res.json())
    //   })
    
    //   if(isLoading){
    //     return <div className='flex align-middle justify-center'>
    //         <progress className='progress w-56 '></progress>
    //     </div>
    //   }
    

    // useEffect( () =>{
    //     fetch('http://localhost:5000/bikeCollections')
    //     .then(res => res.json())
    //     .then(data => setBikes(data))
    // },[])

    
    return (
        <div>
            <Banner></Banner>
            <Categories setCategory={setCategory}></Categories>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-10">
            {
                bikes?.map(bike => <CategoryCart
                key={bike._id}
                bike={bike}
                setBikeModal={setBikeModal}
                ></CategoryCart>)
            }
          
            </div>
        {
            bikeModal && 
            <PrivateRoute>
                <BookingModal
             bikeModal={bikeModal}
             setBikeModal={setBikeModal}
             refetch={refetch}
            ></BookingModal>
            </PrivateRoute>
            
        }
            <BikeCard></BikeCard>
        </div>
    );
};

export default Home;