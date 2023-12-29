import { useState } from 'react';
import OrderFoodImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import FoodTab from '../FoodTab/FoodTab';
import { useParams } from 'react-router-dom';


const Order = () => {
    const[tabIndex, setTabIndex] = useState(0)
    const[menu] =useMenu()
    const{category} = useParams()
    console.log(category);

    const desserts = menu.filter(item=> item.category === 'dessert')
    const soup = menu.filter(item=> item.category === 'soup')
    const salad = menu.filter(item=> item.category === 'salad')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const drinks = menu.filter(item=> item.category === 'drinks')
    return (
        <div>
            <Cover img={OrderFoodImg} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                <FoodTab items={salad}></FoodTab>
                </TabPanel>
                <TabPanel>
                 <FoodTab items={pizza}></FoodTab>
                </TabPanel>
                <TabPanel>
                <FoodTab items={soup}></FoodTab>
                </TabPanel>
                <TabPanel>
                <FoodTab items={desserts}></FoodTab>
                </TabPanel>
                <TabPanel>
                <FoodTab items={drinks}></FoodTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;