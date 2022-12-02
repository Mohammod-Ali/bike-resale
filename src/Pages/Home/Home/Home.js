import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import PrivateRoute from '../../../Routes/PrivateRoute/PrivateRoute';
import Banner from '../Banner/Banner';
import BikeCard from '../BikeCard/BikeCard';
import BookingModal from '../BookingModal/BookingModal';
import Categories from '../Categories/Categories';
import CategoryCart from '../CategoryCart/CategoryCart';



const Home = () => {
   
    const [bikeModal, setBikeModal] = useState(null)
 
    const {data: bikeData, isLoading, refetch } =  useQuery({
        queryKey: ["bikeCollections"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/bikeCollections')
            const data = await res.json()
            return data
        }
    })


    

    // category card data load
    const {data: categories = []} = useQuery({
        queryKey: ['bikeCategories'],
        queryFn: () => fetch('http://localhost:5000/bikeCategories')
        .then(res => res.json())
    })

    
    // filter bike data
    const [bikes, setBikes] = useState(bikeData)

    if(isLoading){
      
        return <div className='flex align-middle justify-center'>
            <progress className='progress w-56 '></progress>
            
        </div>
        
    }

  const handleFilter = categoryData => {
            const result = bikeData.filter(items => {
                return items.categoryId === categoryData
            })
            setBikes(result)
        }

     

    
    return (
        <div>
            <Banner></Banner>
            <Categories 
            handleFilter={handleFilter} 
            categories={categories}
            ></Categories>
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