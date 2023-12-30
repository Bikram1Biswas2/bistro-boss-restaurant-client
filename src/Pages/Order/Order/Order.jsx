import { useState } from 'react';
import OrderFoodImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodTab from '../FoodTab/FoodTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const{category} = useParams()
    const initialIndex = categories.indexOf(category)
    const[tabIndex, setTabIndex] = useState(initialIndex)
    const[menu] =useMenu()
    
  

    const desserts = menu.filter(item=> item.category === 'dessert')
    const soup = menu.filter(item=> item.category === 'soup')
    const salad = menu.filter(item=> item.category === 'salad')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const drinks = menu.filter(item=> item.category === 'drinks')
    return (
        <div>
                <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>
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