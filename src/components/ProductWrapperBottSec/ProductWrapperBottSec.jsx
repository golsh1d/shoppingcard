import React from 'react'
import './ProductWrapperBottSec.css'

import ProductCard from '../ProductCard/ProductCard'
import RightPaginationBtn from '../RightPaginationBtn/RightPaginationBtn'
import LeftPaginationBtn from '../LeftPaginationBtn/LeftPaginationBtn'
import LogInAlertModal from '../LogInAlertModal/LogInAlertModal';
import Overlay from '../Overlay/Overlay'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { useRef, useState, useEffect } from 'react'

import SearchOffIcon from '@mui/icons-material/SearchOff';


export default function ProductWrapperBottSec({allReorderTrigger, bagsReorderTrigger, shoesReorderTrigger, accReorderTrigger, beltsReorderTrigger, popularSortTrigger, earliestSortTrigger, latestSortTrigger, searchContent, onScrollToNav}) {
  const [allProductsInfo , setAllProductsInfo] = useState([
            {id : 1 , category : "bag" , count : 1 , userSelectedCount: 1, title : "Arkatella" , img : `${process.env.PUBLIC_URL}/imgs/bag1.png` , rate : "4.5" , price : "1000" , des : `Made from high-quality vegan leather for a soft, luxurious feel, this handbag features a spacious interior with a zip pocket for secure storage. The adjustable strap allows for crossbody or shoulder wear, while polished gold-tone hardware adds an elegant touch. Lightweight yet durable, it’s lined with soft fabric to protect your belongings. The stylish structured shape keeps its form, and the zip-top closure offers extra safety. Perfectly sized for your phone, wallet, and keys, its minimalist design matches any outfit. Available in two versatile colors, it’s also easy to clean with a damp cloth.`} ,
            {id : 2 , category : "bag" , count : 2 , userSelectedCount: 1, title : "Arko" , img : `${process.env.PUBLIC_URL}/imgs/bag2.png` , rate : "4" , price : "2000" , des : `Crafted from smooth PU leather for modern elegance, this handbag offers a large main compartment that fits books, a tablet, or a makeup bag. Dual carry handles ensure comfort, while a detachable strap allows for hands-free wear. The secure magnetic snap closure keeps your belongings safe, and the soft suede-like lining adds a premium touch. Reinforced stitching ensures long-lasting use, and the slim profile saves space without compromising storage. Polished metal accents create a chic finish, making it ideal for both office and casual outings. Lightweight and travel-friendly, it wipes clean effortlessly.`} ,
            {id : 3 , category : "bag" , count : 3 , userSelectedCount: 1, title : "Karina" , img : `${process.env.PUBLIC_URL}/imgs/bag3.png` , rate : "5" , price : "3000" , des : `This trendy bucket bag, made from soft faux leather, features a relaxed drawstring closure and a spacious interior for all your daily essentials. The adjustable strap offers a custom fit, while gold-tone details add a polished touch. Inside, a slip pocket keeps your phone or cards handy. Its lightweight design ensures all-day comfort, and the sturdy base helps the bag stand upright. Perfect for weekend outings or coffee dates, it requires minimal maintenance and comes in a versatile neutral color. The construction is both soft and durable, making it a timeless choice.`} ,
            {id : 4 , category : "bag" , count : 10 , userSelectedCount: 1, title : "Roset" , img : `${process.env.PUBLIC_URL}/imgs/bag4.png` , rate : "3.5" , price : "800" , des : `An elegant tote crafted from premium vegan leather, this handbag boasts a large capacity to hold your laptop, notebooks, and everyday essentials. Strong double handles provide comfortable carrying, while a zipper closure ensures security. The lined interior includes organizational pockets, and the sleek, modern silhouette makes it suitable for work or travel. A polished metal logo detail adds sophistication, and the lightweight design won’t weigh you down. Made from stain-resistant material, it’s easy to care for and perfect for busy days. With a timeless style, it’s a bag you’ll carry for years.`} ,
            {id : 5 , category : "bag" , count : 4 , userSelectedCount: 1, title : "Felisita" , img : `${process.env.PUBLIC_URL}/imgs/bag5.png` , rate : "3" , price : "400" , des : `Compact yet practical, this crossbody bag in soft PU leather comes with an adjustable strap for a perfect fit. A front zip pocket offers quick access to essentials, while the secure top zip closure keeps items safe. The roomy interior holds daily necessities, and the soft fabric lining adds a touch of luxury. Matte hardware enhances its modern look, and the slim, lightweight shape is ideal for city walks or shopping trips. Built for everyday use, it comes in a classic neutral shade and requires little maintenance, making it a smart wardrobe addition.`} ,
            {id : 6 , category : "bag" , count : 12 , userSelectedCount: 1, title : "Dona" , img : `${process.env.PUBLIC_URL}/imgs/bag6.png` , rate : "2" , price : "3000" , des : `This chic satchel, made from smooth vegan leather with a subtle texture, offers both style and functionality. Dual handles and a detachable shoulder strap provide versatile carrying options, and a secure zip closure protects your belongings. Inside, zip and slip pockets keep everything organized. Stylish gold-tone hardware complements the medium-sized design, perfect for work or events. Lightweight yet sturdy, it’s easy to wipe clean and comfortable to carry. The minimalist modern look pairs well with both casual and formal outfits, making it a versatile wardrobe essential.`} ,
            {id : 7 , category : "bag" , count : 1 , userSelectedCount: 1, title : "Daily" , img : `${process.env.PUBLIC_URL}/imgs/bag7.png` , rate : "4.9" , price : "4500" , des : `A stylish hobo bag crafted from soft faux leather, this piece features a relaxed slouchy shape and a single wide shoulder strap for effortless wear. The magnetic snap closure offers quick access, while the spacious interior with a zip pocket keeps items organized. Its lightweight construction ensures comfort, and decorative stitching adds a touch of charm. Designed for everyday outfits, it’s durable enough for long-term use. The perfect size for daily essentials, it comes in a classic neutral tone that blends seamlessly with casual style.`} ,
            {id : 8 , category : "bag" , count : 5 , userSelectedCount: 1, title : "Canvas" , img : `${process.env.PUBLIC_URL}/imgs/bag8.png` , rate : "5" , price : "6000" , des : `Make a bold statement with this modern mini handbag, finished in sleek PU leather. Featuring a top handle and an optional shoulder strap, it’s secured with a stylish clasp closure. The compact yet functional interior keeps essentials organized, while bold metallic details add a touch of glamour. Perfect for night outs or special events, its lightweight design ensures easy carrying. Available in eye-catching color options, it’s lined with smooth fabric for added protection. With its fashion-forward silhouette and easy-care material, this bag is both trendy and practical.`} ,
            {id : 9 , category : "bag" , count : 1 , userSelectedCount: 1, title : "Emilia" , img : `${process.env.PUBLIC_URL}/imgs/bag9.png` , rate : "4.5" , price : "1000" , des : `Made from high-quality vegan leather for a soft, luxurious feel, this handbag features a spacious interior with a zip pocket for secure storage. The adjustable strap allows for crossbody or shoulder wear, while polished gold-tone hardware adds an elegant touch. Lightweight yet durable, it’s lined with soft fabric to protect your belongings. The stylish structured shape keeps its form, and the zip-top closure offers extra safety. Perfectly sized for your phone, wallet, and keys, its minimalist design matches any outfit. Available in two versatile colors, it’s also easy to clean with a damp cloth.`} ,
            {id : 10 , category : "bag" , count : 2 , userSelectedCount: 1, title : "Phoboe" , img : `${process.env.PUBLIC_URL}/imgs/bag10.png` , rate : "4" , price : "2000" , des : `Crafted from smooth PU leather for modern elegance, this handbag offers a large main compartment that fits books, a tablet, or a makeup bag. Dual carry handles ensure comfort, while a detachable strap allows for hands-free wear. The secure magnetic snap closure keeps your belongings safe, and the soft suede-like lining adds a premium touch. Reinforced stitching ensures long-lasting use, and the slim profile saves space without compromising storage. Polished metal accents create a chic finish, making it ideal for both office and casual outings. Lightweight and travel-friendly, it wipes clean effortlessly.`} ,
            {id : 11 , category : "shoe" , count : 6 , userSelectedCount: 1, title : "Anakarla" , img : `${process.env.PUBLIC_URL}/imgs/shoe1.png` , rate : "4.9" , price : "600" , des : `Crafted from premium faux leather, these versatile pumps offer a sleek pointed toe and a sturdy block heel for all-day comfort. The cushioned insole provides gentle support, while the smooth lining ensures a comfortable fit. A slip-on design allows for easy wear, and the timeless silhouette pairs perfectly with office attire or evening outfits. The durable sole offers excellent grip, making them suitable for both indoor and outdoor events. Lightweight yet structured, they’re available in classic black for endless styling possibilities. Easy to maintain, these pumps are a must-have in every wardrobe.`} ,
            {id : 12 , category : "shoe" , count : 8 , userSelectedCount: 1, title : "Arcane" , img : `${process.env.PUBLIC_URL}/imgs/shoe2.png` , rate : "3.5" , price : "400" , des : `These casual sneakers combine breathable mesh panels with faux leather overlays for style and durability. The cushioned midsole absorbs shock with every step, while the padded collar ensures ankle comfort. Lace-up closure provides a secure fit, and the lightweight outsole offers flexibility for all-day wear. Designed in a neutral palette, they pair easily with jeans, skirts, or activewear. The moisture-wicking lining keeps feet fresh, making them ideal for travel, errands, or casual outings. Built for comfort and style, they bring a sporty-chic touch to your everyday look.`} ,
            {id : 13 , category : "shoe" , count : 5 , userSelectedCount: 1, title : "Memento" , img : `${process.env.PUBLIC_URL}/imgs/shoe3.png` , rate : "3.6" , price : "500" , des : `Perfect for warm-weather days, these strappy sandals feature soft vegan leather straps and an adjustable buckle closure for a secure fit. The cushioned footbed keeps your feet comfortable during long walks, while the flexible sole moves naturally with each step. Their minimalist design complements both dresses and casual outfits, making them ideal for beach trips or city strolls. Lightweight and easy to pack, they’re available in a range of trendy colors. The durable construction ensures they remain a summer favorite for years to come.`} ,
            {id : 14 , category : "shoe" , count : 12 , userSelectedCount: 1, title : "Karlla" , img : `${process.env.PUBLIC_URL}/imgs/shoe4.png` , rate : "4" , price : "650" , des : `Sophisticated and chic, these ankle boots are made from smooth faux leather with a subtle matte finish. A side zipper allows for effortless wear, while the stacked block heel adds height without sacrificing comfort. The cushioned insole and soft lining provide all-day support, making them perfect for both work and weekends. Their versatile design pairs beautifully with jeans, skirts, or dresses. A durable non-slip sole ensures stability on various surfaces, while the timeless silhouette keeps them in style season after season.`} ,
            {id : 15 , category : "shoe" , count : 11 , userSelectedCount: 1, title : "Sansa" , img : `${process.env.PUBLIC_URL}/imgs/shoe5.png` , rate : "3" , price : "1000" , des : `These ballet flats combine classic elegance with modern comfort. Crafted from soft faux leather, they feature a rounded toe and a flexible sole for natural movement. A cushioned insole keeps feet comfortable all day, while a small bow detail adds feminine charm. Easy to slip on, they’re perfect for commuting, running errands, or casual gatherings. Lightweight and compact, they’re great for travel. Available in a variety of colors, these flats are versatile enough to match both workwear and weekend outfits.`} ,
            {id : 16 , category : "shoe" , count : 7, userSelectedCount: 1, title : "Arya" , img : `${process.env.PUBLIC_URL}/imgs/shoe6.png` , rate : "5" , price : "2000" , des : `Ideal for sporty looks, these slip-on sneakers are made from breathable knit fabric for a snug yet comfortable fit. The elasticated opening ensures easy wear, while the lightweight rubber sole provides excellent traction. A cushioned insole adds extra comfort, making them perfect for long days on your feet. Their minimalist design works with leggings, jeans, or shorts, and the flexible construction adapts to your movements. Durable and easy to clean, these sneakers combine everyday convenience with a modern, athletic style.`} ,
            {id : 17 , category : "shoe" , count : 6 , userSelectedCount: 1, title : "Catella" , img : `${process.env.PUBLIC_URL}/imgs/shoe7.png` , rate : "3.8" , price : "400" , des : `Designed for both comfort and style, these loafers feature a smooth faux leather upper and a low stacked heel. The cushioned insole provides gentle support, while the slip-on design allows for effortless wear. A polished metal accent across the front adds sophistication, making them ideal for both casual and business-casual outfits. The flexible sole ensures ease of movement, and the neutral color pairs well with a variety of styles. Built for durability, these loafers will remain a wardrobe staple for years.`} ,
            {id : 18 , category : "shoe" , count : 23 , userSelectedCount: 1, title : "Petra" , img : `${process.env.PUBLIC_URL}/imgs/shoe8.png` , rate : "2.9" , price : "300" , des : `These platform sandals offer height without compromising comfort. Made with faux suede straps and a secure buckle closure, they feature a padded insole for extra cushioning. The lightweight platform sole ensures stability, making them perfect for summer outings, festivals, or casual dinners. Their stylish design works well with dresses, jeans, or shorts. Available in soft neutral shades, they’re easy to mix and match. Durable and easy to care for, they’ll be your go-to shoes for sunny days.`} ,
            {id : 19 , category : "shoe" , count : 13, userSelectedCount: 1, title : "Daenera" , img : `${process.env.PUBLIC_URL}/imgs/shoe9.png` , rate : "4" , price : "1000" , des : `Perfect for formal occasions, these stiletto heels feature a sleek pointed toe and a glossy faux patent leather finish. The slim heel elongates the legs, while the cushioned footbed ensures a comfortable step. A smooth lining prevents irritation, and the slip-on design makes them easy to wear. Their elegant style pairs effortlessly with cocktail dresses, gowns, or tailored trousers. Lightweight yet sturdy, they’re a glamorous addition to any shoe collection.`} ,
            {id : 20 , category : "shoe" , count : 14 , userSelectedCount: 1, title : "Amanda" , img : `${process.env.PUBLIC_URL}/imgs/shoe10.png` , rate : "4.5" , price : "1100" , des : `These winter boots are designed to keep your feet warm and cozy. Made from water-resistant faux leather and lined with soft faux fur, they feature a lace-up front for a secure fit. The durable rubber sole offers excellent grip on slippery surfaces, making them ideal for snowy or rainy days. The cushioned insole adds comfort, and the classic neutral color pairs well with winter outfits. Stylish and functional, they’re perfect for cold-weather adventures.`} ,
            {id : 21 , category : "shoe" , count : 15 , userSelectedCount: 1, title : "Rachel" , img : `${process.env.PUBLIC_URL}/imgs/shoe11.png` , rate : "4.5" , price : "1000" , des : `Effortlessly chic, these espadrilles feature a canvas upper and a braided jute sole for a timeless summer look. The slip-on design makes them easy to wear, while the cushioned footbed offers lasting comfort. Lightweight and breathable, they’re ideal for beach days, picnics, or casual weekends. Their neutral tone matches a variety of outfits, from flowy dresses to denim shorts. Durable stitching ensures they’ll last for seasons to come.`} ,
            {id : 22 , category : "acc" , count : 16 , userSelectedCount: 1, title : "Solene" , img : `${process.env.PUBLIC_URL}/imgs/acc1.png`, rate : "4.3" , price : "1100" , des : `Elegant and stylish necklace for daily wear. Crafted with high-quality materials. Adds a subtle sparkle to any outfit. Lightweight and comfortable for long hours. Perfect for layering or solo wear. Timeless design suitable for any occasion. Hypoallergenic and safe for sensitive skin. A beautiful gift for loved ones. Modern yet classic style. Versatile design matches multiple outfits. Durable and long-lasting construction. Finely detailed craftsmanship enhances its charm. `} ,
            {id : 23 , category : "acc" , count : 17 , userSelectedCount: 1, title : "Sense" , img : `${process.env.PUBLIC_URL}/imgs/acc2.png`, rate : "3" , price : "1200" , des : `Trendy design that elevates your look instantly. Comfortable to wear all day. Shiny finish catches the light beautifully. Perfect for casual and formal occasions. Hypoallergenic for sensitive skin. Adds sophistication and charm to any outfit. Timeless style with modern flair. Ideal gift for birthdays or special events. Lightweight yet durable construction. Pairs well with other jewelry pieces. Sleek and elegant design. Handcrafted with attention to detail.`} ,
            {id : 24 , category : "acc" , count : 4 , userSelectedCount: 1, title : "Aveline" , img : `${process.env.PUBLIC_URL}/imgs/acc4.png`, rate : "2.5" , price : "1100" , des : `Chic and versatile design for every wardrobe. Crafted from premium materials for durability. Adds a touch of elegance to any outfit. Comfortable and lightweight for all-day wear. Perfect for work, parties, or casual outings. Hypoallergenic and safe for sensitive skin. Timeless design that never goes out of style. Ideal gift for friends or family. Sparkling finish enhances your look. Can be layered with other necklaces. Modern and stylish appeal. Detailed craftsmanship creates unique charm.`} ,
            {id : 25 , category : "acc" , count : 19 , userSelectedCount: 1, title : "Liora" , img : `${process.env.PUBLIC_URL}/imgs/acc5.png`, rate : "3.8" , price : "1400" , des : `Stylish and comfortable bracelet for daily wear. Made with high-quality materials. Lightweight and durable design. Adds a subtle sparkle to any outfit. Perfect for layering with other bracelets. Hypoallergenic and safe for sensitive skin. Timeless style that suits all occasions. Makes a thoughtful gift for loved ones. Elegant design for casual or formal outfits. Durable construction ensures long-lasting wear. Modern yet classic appeal. Finely crafted details enhance its beauty.`} ,
            {id : 26 , category : "acc" , count : 18 , userSelectedCount: 1, title : "Eloween" , img : `${process.env.PUBLIC_URL}/imgs/acc6.png`, rate : "4.2" , price : "2000" , des : `Trendy design with elegant charm. Comfortable for long hours of wear. Crafted from premium materials for durability. Adds sophistication to your look. Perfect for casual or evening outfits. Hypoallergenic and safe for sensitive skin. Can be combined with other jewelry pieces. Ideal gift for friends or family. Sleek and stylish design. Lightweight yet sturdy construction. Timeless and versatile for multiple occasions. Attention to detail makes each piece unique.`} ,
            {id : 27 , category : "acc" , count : 17 , userSelectedCount: 1, title : "Nahla" , img : `${process.env.PUBLIC_URL}/imgs/acc7.png`, rate : "5" , price : "1700" , des : `Chic and modern bracelet for fashion lovers. Lightweight and easy to wear. Sparkling finish adds elegance to outfits. Crafted with durable, high-quality materials. Hypoallergenic and safe for sensitive skin. Perfect for layering or solo wear. Stylish design suitable for all occasions. Makes a great gift for any event. Timeless yet contemporary look. Adds charm to everyday style. Comfortable fit for daily wear. Finely detailed craftsmanship enhances its appeal.`} ,
            {id : 28 , category : "acc" , count : 16 , userSelectedCount: 1, title : "Thalia" , img : `${process.env.PUBLIC_URL}/imgs/acc8.png`, rate : "4" , price : "1000" , des : `Elegant bracelet with classic design. Durable and lightweight construction. Adds a subtle shine to outfits. Perfect for layering with other pieces. Hypoallergenic and skin-friendly. Timeless style suitable for all occasions. Ideal gift for friends, family, or yourself. Chic and versatile design. Crafted with attention to detail. Comfortable for long-term wear. Modern yet classic aesthetic. Enhances any outfit with sophistication.`} ,
            {id : 29 , category : "acc" , count : 3 , userSelectedCount: 1, title : "Maris" , img : `${process.env.PUBLIC_URL}/imgs/acc9.png`, rate : "2" , price : "1600" , des : `Trendy and stylish design for daily wear. Lightweight and comfortable all day. Crafted from premium, durable materials. Sparkling finish elevates any look. Hypoallergenic and safe for sensitive skin. Perfect for casual and formal outfits. Versatile design pairs with other jewelry. Timeless charm that never goes out of style. Ideal gift for loved ones. Elegant and modern appeal. Detailed craftsmanship adds uniqueness. Adds a touch of sophistication to any ensemble.`} ,
            {id : 30 , category : "acc" , count : 14 , userSelectedCount: 1, title : "Nyra" , img : `${process.env.PUBLIC_URL}/imgs/acc10.png` , rate : "3.5" , price : "2100" , des : `Chic, elegant, and versatile bracelet. Lightweight for all-day comfort. Made with high-quality, durable materials. Adds sparkle and elegance to any outfit. Perfect for casual or special occasions. Hypoallergenic and skin-friendly. Can be layered with other bracelets. Timeless design with modern touch. Ideal gift for birthdays or celebrations. Stylish and sophisticated appearance. Comfortable fit for daily wear. Handcrafted details make each piece unique.`} ,
            {id : 31 , category : "acc" , count : 13 , userSelectedCount: 1, title : "Seraphina" , img : `${process.env.PUBLIC_URL}/imgs/acc11.png` , rate : "4.8" , price : "2200" , des : `Elegant design perfect for any occasion. Lightweight and comfortable to wear all day. Made with high-quality materials for durability. Shiny finish that catches the light beautifully. Versatile style to match casual or formal outfits. Hypoallergenic, safe for sensitive ears. Adds a touch of sophistication to your look. Easy to pair with other jewelry pieces. Classic design that never goes out of style. Perfect gift for loved ones or yourself. Sleek and modern, yet timeless elegance. Handcrafted details make each pair unique.`} ,
            {id : 32 , category : "acc" , count : 12 , userSelectedCount: 1, title : "Vesper" , img : `${process.env.PUBLIC_URL}/imgs/acc12.png` , rate : "3" , price : "2000" , des : `Chic and trendy design for fashion lovers. Lightweight for all-day comfort. Durable construction with premium materials. Sparkling finish enhances every outfit. Suitable for parties or casual wear. Hypoallergenic and safe for sensitive ears. Adds elegance to your everyday look. Simple yet stylish design. Perfect as a thoughtful gift. Versatile for any wardrobe. Timeless design with modern touch. Handcrafted with attention to detail.`} ,
            {id : 33 , category : "belt" , count : 6 , userSelectedCount: 1, title : "Calista" , img : `${process.env.PUBLIC_URL}/imgs/belt1.png` , rate : "3.3" , price : "3000" , des : `Classic leather belt with sleek design. Durable and high-quality materials. Adjustable fit for comfort. Perfect for casual and formal outfits. Adds elegance and style to any look. Timeless accessory for daily wear. Easy to pair with jeans, dresses, or trousers. Stylish buckle with polished finish. Ideal gift for fashion lovers. Versatile design suits all occasions. Comfortable and long-lasting. Refined craftsmanship for lasting appeal.`} ,
            {id : 34 , category : "belt" , count : 10 , userSelectedCount: 1, title : "Mirelle" , img : `${process.env.PUBLIC_URL}/imgs/belt2.png` , rate : "4.3" , price : "2100" , des : `Elegant and stylish belt for all wardrobes. Crafted from premium leather. Adjustable and comfortable fit. Perfect for everyday use or special occasions. Adds sophistication to any outfit. Durable and long-lasting construction. Versatile design to match various styles. Sleek buckle adds a modern touch. Ideal gift for friends or family. Timeless classic design. High-quality craftsmanship ensures durability. Enhances any outfit effortlessly.`} ,
            {id : 35 , category : "belt" , count : 9 , userSelectedCount: 1, title : "Rowan" , img : `${process.env.PUBLIC_URL}/imgs/belt3.png` , rate : "5" , price : "2200" , des : `Trendy and fashionable leather belt. Adjustable fit for comfort. Adds style to casual or formal attire. Crafted from durable, premium materials. Elegant buckle for polished look. Perfect accessory for any occasion. Timeless design that complements all outfits. Comfortable for daily wear. Ideal gift for fashion-conscious loved ones. Versatile and stylish design. High-quality craftsmanship for longevity. Elevates your wardrobe effortlessly.`} ,
            {id : 36 , category : "belt" , count : 8 , userSelectedCount: 1, title : "Zephyra" , img : `${process.env.PUBLIC_URL}/imgs/belt4.png` , rate : "4.6" , price : "2300" , des : `Classic design with modern twist. Made from premium leather for durability. Adjustable and comfortable fit. Adds elegance to any outfit. Suitable for casual and formal wear. Timeless accessory for every wardrobe. Stylish buckle enhances overall look. Perfect as a gift for loved ones. Versatile and fashionable design. Comfortable for everyday use. High-quality craftsmanship for long-lasting appeal. Enhances outfits with subtle sophistication.`} ,
            {id : 37 , category : "belt" , count : 7 , userSelectedCount: 1, title : "Odessa" , img : `${process.env.PUBLIC_URL}/imgs/belt5.png` , rate : "4.5" , price : "2400" , des : `Elegant leather belt with polished finish. Adjustable for a perfect fit. Durable and high-quality construction. Perfect for casual or formal outfits. Adds a touch of sophistication to your look. Timeless and versatile accessory. Ideal for everyday wear or special occasions. Stylish buckle for modern appeal. Comfortable and practical design. Great gift idea for friends or family. High-quality craftsmanship ensures durability. Complements all wardrobe styles effortlessly.`} ,
            {id : 38 , category : "belt" , count : 6 , userSelectedCount: 1, title : "Lyra" , img : `${process.env.PUBLIC_URL}/imgs/belt6.png` , rate : "4.7" , price : "2500" , des : `Trendy and stylish belt for modern fashion. Made with premium leather materials. Adjustable fit for comfort. Adds elegance to any outfit. Perfect for casual, office, or evening wear. Durable and long-lasting construction. Timeless design suitable for all occasions. Sleek buckle adds modern touch. Ideal gift for fashion enthusiasts. Comfortable and versatile accessory. High-quality craftsmanship for lasting appeal. Enhances your look effortlessly.`} ,
            {id : 39 , category : "belt" , count : 8 , userSelectedCount: 1, title : "Junia" , img : `${process.env.PUBLIC_URL}/imgs/belt7.png` , rate : "4" , price : "2600" , des : `Classic and versatile leather belt. Adjustable for perfect fit. Adds style and sophistication to outfits. Durable construction with premium materials. Suitable for casual or formal wear. Timeless design complements all wardrobes. Sleek and polished buckle. Comfortable for daily use. Perfect gift for friends or family. Elegant accessory for any occasion. High-quality craftsmanship ensures longevity. Enhances overall outfit effortlessly.`} ,
            {id : 40 , category : "belt" , count : 1 , userSelectedCount: 1, title : "Elara" , img : `${process.env.PUBLIC_URL}/imgs/belt8.png` , rate : "4" , price : "2700" , des : `Stylish belt with modern design. Adjustable and comfortable fit. Crafted from premium leather for durability. Adds charm to casual and formal outfits. Timeless and versatile accessory. Elegant buckle with polished finish. Suitable for daily wear or special occasions. Perfect gift for fashion lovers. Comfortable and practical design. Durable and long-lasting construction. Complements a variety of wardrobe styles. Elevates your look effortlessly.`} ,
            {id : 41 , category : "belt" , count : 2 , userSelectedCount: 1, title : "Selene" , img : `${process.env.PUBLIC_URL}/imgs/belt9.png` , rate : "3.5" , price : "2800" , des : `Elegant leather belt with sleek, classic design. Adjustable for all sizes. Adds sophistication to any outfit. Made from high-quality, durable materials. Perfect for casual or formal occasions. Timeless and versatile accessory. Stylish buckle enhances overall appearance. Comfortable for daily wear. Ideal gift for loved ones. High-quality craftsmanship ensures longevity. Modern and elegant look. Complements every wardrobe effortlessly.`} ,
            {id : 42 , category : "belt" , count : 3 , userSelectedCount: 1, title : "Isildor" , img : `${process.env.PUBLIC_URL}/imgs/belt10.png` , rate : "3.8" , price : "2000" , des : `Trendy and elegant belt for everyday wear. Adjustable and comfortable fit. Crafted from premium, durable leather. Adds style and sophistication to outfits. Perfect for casual, office, or formal occasions. Timeless and versatile design. Sleek buckle with polished finish. Ideal gift for fashion enthusiasts. Durable and long-lasting construction. Enhances your wardrobe effortlessly. Comfortable for daily use. Elegant accessory that completes any outfit.`} ,
  ])
  const[finalProductsInfo , setFinalProductsInfo] = useState([])
  const[swiperIsShown , setSwiperIsShown] = useState(null)
  const[isLogIn , setIsLogIn] = useState(null)
  const[overlayStyle, setOverlayStyle] = useState(null) 
  const[rows, setRows] = useState(1) 
  const[swiperKey, setSwiperKey] = useState(0) 
  const[category, setCategory] = useState("") 

  let swiperRef = useRef(null)
  let productWrapperBottSec = useRef(null)

  function handlePrev() {
    const swiper = swiperRef.current;
    if (!swiper) return
    
    if (window.matchMedia("(min-width: 1280px)").matches) {
      swiper.slideTo(swiper.activeIndex - 5)
    } else if (window.matchMedia("(min-width: 768px)").matches) {
      swiper.slideTo(swiper.activeIndex - 2)
    } else if (window.matchMedia("(min-width: 500px)").matches) {
      swiper.slideTo(swiper.activeIndex - 2)
    } else {
      swiper.slidePrev()
    }

    productWrapperBottSec.current.scrollIntoView({ behavior : "smooth" , block : "start"})
  }
  
  function handleNext() {
    const swiper = swiperRef.current;
    if (!swiper) return
    
    if (window.matchMedia("(min-width: 1280px)").matches) {
      swiper.slideTo(swiper.activeIndex + 5)
    } else if (window.matchMedia("(min-width: 768px)").matches) {
      swiper.slideTo(swiper.activeIndex + 2)
    } else if (window.matchMedia("(min-width: 500px)").matches) {
      swiper.slideTo(swiper.activeIndex + 2)
    } else {
      swiper.slideNext()
    }

    productWrapperBottSec.current.scrollIntoView({ behavior : "smooth" , block : "start"})
  }  

  function hideModal() {
    setIsLogIn(true)
    setOverlayStyle({display : "none"})
  }

  function userLogIn(bool) {
    if(bool === true) {
      setIsLogIn(true)
    } else if(bool === false) {
      setIsLogIn(false)
      setOverlayStyle({display : "block"})
    }
  }

  function scrollToNav() {
    onScrollToNav()
  }

  function getBackToPrevHeight() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        productWrapperBottSec.current.style.height = "3000px"
      } else {
        productWrapperBottSec.current.style.height = "calc(100% - 110px) !important"
    }
  }

  useEffect(() => {
    let searchedProduct = []

    allProductsInfo.map(obj => {
      if(obj.title.toLowerCase() === searchContent.trim().toLowerCase()) {
        searchedProduct.push(obj)
      } 
    })
    
    if(searchedProduct.length === 0){
      setSwiperIsShown(false)
      if (window.matchMedia("(max-width: 768px)").matches) {
        productWrapperBottSec.current.style.height = "100vh"
      }
      setCategory("")
    } else {
      setFinalProductsInfo(searchedProduct)
      setSwiperIsShown(true)
      if (window.matchMedia("(max-width: 768px)").matches) {
        productWrapperBottSec.current.style.height = "min-content"
      }
      setCategory("")
    }

  } , [searchContent])

  useEffect(() => {
    let popularProducts = [...finalProductsInfo].sort((a , b) => b.rate - a.rate)

    if (category) {
      setFinalProductsInfo(popularProducts)
      setSwiperIsShown(true)
    }
  } , [popularSortTrigger])

  useEffect(() => {
    let earliestProducts = [...finalProductsInfo].sort((a , b) => b.id - a.id)

    if (category) {
      setFinalProductsInfo(earliestProducts)
      setSwiperIsShown(true)
    }
  } , [earliestSortTrigger])

  useEffect(() => {
    let latestProducts = [...finalProductsInfo].sort((a , b) => a.id - b.id)

    if (category) {
      setFinalProductsInfo(latestProducts)
      setSwiperIsShown(true)
    }
  } , [latestSortTrigger])

  useEffect(() => {
    setFinalProductsInfo(allProductsInfo)
    setSwiperIsShown(true)
  } , [])

  useEffect(() => {
    let allBelt = []
    allProductsInfo.map(obj => {
      if(obj.category === "belt") {
        allBelt.push(obj)
      }
    })
    setFinalProductsInfo(allBelt)
    setSwiperIsShown(true)
    getBackToPrevHeight()
    setCategory("belt")
  } , [beltsReorderTrigger])

  useEffect(() => {
    let allAcc = []
    allProductsInfo.map(obj => {
      if(obj.category === "acc") {
        allAcc.push(obj)
      }
    })
    setFinalProductsInfo(allAcc)
    setSwiperIsShown(true)
    getBackToPrevHeight()
    setCategory("acc")
  } , [accReorderTrigger])

  useEffect(() => {
    let allShoes = []
    allProductsInfo.map(obj => {
      if(obj.category === "shoe") {
        allShoes.push(obj)
      }
    })
    setFinalProductsInfo(allShoes)
    setSwiperIsShown(true)
    getBackToPrevHeight()
    setCategory("shoe")
  } , [shoesReorderTrigger])

  useEffect(() => {
    let allBags = []
    allProductsInfo.map(obj => {
      if(obj.category === "bag") {
        allBags.push(obj)
      }
    })
    setFinalProductsInfo(allBags)
    setSwiperIsShown(true)
    getBackToPrevHeight()
    setCategory("bag")
  } , [bagsReorderTrigger])

  useEffect(() => {
    setFinalProductsInfo(allProductsInfo)
    setSwiperIsShown(true)
    getBackToPrevHeight()
    setCategory("all")
  } , [allReorderTrigger])

  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth >= 768 && window.innerHeight >= 1024) {
        setRows(2)
        setSwiperKey(prev => prev + 1)
      } else if (window.innerWidth >= 768 && window.innerHeight < 1024) {
        setRows(1)
        setSwiperKey(prev => prev + 1)
      } else if (window.innerWidth < 768){
        setRows(5)
        setSwiperKey(prev => prev + 1)
      } else {
        setRows(1)
        setSwiperKey(prev => prev + 1)
      }
    }

    checkSize()

    window.addEventListener("resize" , checkSize)
    return () => window.removeEventListener("resize" , checkSize)
  } , [])

  useEffect(() => {
    getBackToPrevHeight()
    setCategory("all")
  } , [])

  return (
    <>
    <div className='ProductWrapperBottSec-container' ref={productWrapperBottSec}>
      {swiperIsShown ?
      <Swiper
        key={swiperKey}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard, Grid]}
        className="mySwiper"
        spaceBetween={6}
        breakpoints={{
          0 : {
            slidesPerView : 1,
          },
          500 : {
            slidesPerView : 2,
          } ,
          768 : {
            slidesPerView : 2,
          } ,
          1280 : {
            slidesPerView : 5,
          }
        }}
        grid = {{
          rows : rows,
          fill : "column"
        }}
      >

      {
        finalProductsInfo.map(obj => (
        <SwiperSlide >
          <ProductCard {...obj} key={obj.id} onLogIn={userLogIn} onScrollToNav={scrollToNav}/>
        </SwiperSlide>
        ))
      }

      </Swiper> : 
      <div className='ProductWrapperBottSec-searchOff-container'>
        <span className='ProductWrapperBottSec-span'>No item found!</span>
        <SearchOffIcon className='ProductWrapperBottSec-icon'/>
      </div>
      }
    </div>

    <div className='ProductWrapperBottSec-button-container'>
        <div className='ProductWrapperBottSec-icon-wrapper'>
             <LeftPaginationBtn onLeft={handlePrev}/>
             <RightPaginationBtn onRight={handleNext}/>
        </div>
    </div>

    {isLogIn === false && <LogInAlertModal/>}
    <Overlay styleProp={overlayStyle} onOverlay={hideModal}/>
    </>
  )
}