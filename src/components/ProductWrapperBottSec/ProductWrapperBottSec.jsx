import React, { useEffect } from 'react'
import './ProductWrapperBottSec.css'

import ProductCard from '../ProductCard/ProductCard'
import RightPagination from '../RightPagination/RightPagination'
import LeftPagination from '../LeftPagination/LeftPagination'
import LogInAlertModal from '../LogInAlertModal/LogInAlertModal';
import Overlay from '../Overlay/Overlay'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';

import { useRef , useState } from 'react'

import SearchOffIcon from '@mui/icons-material/SearchOff';


export default function ProductWrapperBottSec({allReorderTrigger, bagsReorderTrigger, shoesReorderTrigger, accReorderTrigger, beltsReorderTrigger, popularSortTrigger, earliestSortTrigger, latestSortTrigger, searchContent}) {
  const [allProductsInfo , setAllProductsInfo] = useState([
    {id : 1 , category : "bag" , count : 1 , title : "Arkatella" , img : `${process.env.PUBLIC_URL}/imgs/bag1.jpg` , rate : "4.5" , price : "1000" , des : `A chic everyday bag with a minimalist design. Perfect for casual outings, this bag holds all your essentials in style.A chic everyday bag with a minimalist design. Perfect for casual outings, this bag holds all your essentials in style.`} ,
    {id : 2 , category : "bag" , count : 2 , title : "Arko" , img : `${process.env.PUBLIC_URL}/imgs/bag2.jpg` , rate : "4" , price : "2000" , des : `Elegant and compact, this handbag adds a classy touch to any outfit. Ideal for dinners, dates, or a night out with friends.Elegant and compact, this handbag adds a classy touch to any outfit. Ideal for dinners, dates, or a night out with friends.`} ,
    {id : 3 , category : "bag" , count : 3 , title : "Karina" , img : `${process.env.PUBLIC_URL}/imgs/bag3.jpg` , rate : "5" , price : "3000" , des : `Spacious and sturdy, this tote is made for busy days. Great for work, shopping, or carrying your daily must-haves.Spacious and sturdy, this tote is made for busy days. Great for work, shopping, or carrying your daily must-haves.`} ,
    {id : 4 , category : "bag" , count : 10 , title : "Roset" , img : `${process.env.PUBLIC_URL}/imgs/bag4.jpg` , rate : "3.5" , price : "800" , des : `A sleek crossbody with a modern edge. Lightweight, practical, and ideal for hands-free convenience. A sleek crossbody with a modern edge. Lightweight, practical, and ideal for hands-free convenience`} ,
    {id : 5 , category : "bag" , count : 4 , title : "Felisita" , img : `${process.env.PUBLIC_URL}/imgs/bag5.jpg` , rate : "3" , price : "400" , des : `A vintage-inspired bag with unique textures and charm. It’s a timeless piece that stands out in any wardrobe. A vintage-inspired bag with unique textures and charm. It’s a timeless piece that stands out in any wardrobe.`} ,
    {id : 6 , category : "bag" , count : 12 , title : "Dona" , img : `${process.env.PUBLIC_URL}/imgs/bag6.jpg` , rate : "2" , price : "3000" , des : `This sporty backpack blends comfort with style. Perfect for school, travel, or weekend adventures. This sporty backpack blends comfort with style. Perfect for school, travel, or weekend adventures.`} ,
    {id : 7 , category : "bag" , count : 0 , title : "Daily" , img : `${process.env.PUBLIC_URL}/imgs/bag7.jpg` , rate : "4.9" , price : "4500" , des : `Soft and slouchy, this hobo bag is all about relaxed elegance. Roomy enough for daily use, yet effortlessly stylish. Soft and slouchy, this hobo bag is all about relaxed elegance. Roomy enough for daily use, yet effortlessly stylish.`} ,
    {id : 8 , category : "bag" , count : 5 , title : "Canvas" , img : `${process.env.PUBLIC_URL}/imgs/bag8.jpg` , rate : "5" , price : "6000" , des : `Bold and eye-catching, this statement bag turns heads wherever you go. Made for those who love to express their personality through fashion. Bold and eye-catching, this statement bag turns heads wherever you go. Made for those who love to express their personality through fashion.`} ,
    {id : 9 , category : "shoe" , count : 6 , title : "Anakarla" , img : `${process.env.PUBLIC_URL}/imgs/shoe1.jpg` , rate : "4.9" , price : "600" , des : `Step into elegance with these classic heels.Perfect for formal events, they add height and sophistication to any outfit. Step into elegance with these classic heels.Perfect for formal events, they add height and sophistication to any outfit.`} ,
    {id : 10 , category : "shoe" , count : 8 , title : "Arcane" , img : `${process.env.PUBLIC_URL}/imgs/shoe2.jpg` , rate : "3.5" , price : "400" , des : `Chic and comfortable, these ballet flats are made for all-day wear.Their sleek design pairs effortlessly with both jeans and dresses. Chic and comfortable, these ballet flats are made for all-day wear.Their sleek design pairs effortlessly with both jeans and dresses.`} ,
    {id : 11 , category : "shoe" , count : 0 , title : "Memento" , img : `${process.env.PUBLIC_URL}/imgs/shoe3.jpg` , rate : "3.6" , price : "500" , des : `Make a bold statement with these vibrant sneakers.Designed for comfort and style, they’re perfect for on-the-go days. Make a bold statement with these vibrant sneakers.Designed for comfort and style, they’re perfect for on-the-go days.`} ,
    {id : 12 , category : "shoe" , count : 12 , title : "Karlla" , img : `${process.env.PUBLIC_URL}/imgs/shoe4.jpg` , rate : "4" , price : "650" , des : `These strappy sandals are summer essentials.Lightweight, breathable, and ideal for beach days or city strolls. These strappy sandals are summer essentials.Lightweight, breathable, and ideal for beach days or city strolls.`} ,
    {id : 13 , category : "shoe" , count : 11 , title : "Sansa" , img : `${process.env.PUBLIC_URL}/imgs/shoe5.jpg` , rate : "3" , price : "1000" , des : `Ankle boots with attitude — stylish, sturdy, and versatile.Dress them up or down, rain or shine. Ankle boots with attitude — stylish, sturdy, and versatile.Dress them up or down, rain or shine.`} ,
    {id : 14 , category : "shoe" , count : 7, title : "Arya" , img : `${process.env.PUBLIC_URL}/imgs/shoe6.jpg` , rate : "5" , price : "2000" , des : `These wedge heels combine height with comfort.Perfect for brunch, garden parties, or everyday chic. These wedge heels combine height with comfort.Perfect for brunch, garden parties, or everyday chic.`} ,
    {id : 15 , category : "shoe" , count : 6 , title : "Catella" , img : `${process.env.PUBLIC_URL}/imgs/shoe7.jpg` , rate : "3.8" , price : "400" , des : `Soft suede loafers that bring effortless elegance to your casual looks.Slip them on for instant style and ease. Soft suede loafers that bring effortless elegance to your casual looks.Slip them on for instant style and ease.`} ,
    {id : 16 , category : "shoe" , count : 23 , title : "Petra" , img : `${process.env.PUBLIC_URL}/imgs/shoe8.jpg` , rate : "2.9" , price : "300" , des : `Glamorous evening shoes with a touch of sparkle.Perfect for weddings, parties, or any special night out. Glamorous evening shoes with a touch of sparkle.Perfect for weddings, parties, or any special night out.`} ,
    {id : 17 , category : "shoe" , count : 13, title : "Daenera" , img : `${process.env.PUBLIC_URL}/imgs/shoe9.jpg` , rate : "4" , price : "1000" , des : `These combat boots are tough, trendy, and built to last.Pair them with jeans or dresses for an edgy twist These combat boots are tough, trendy, and built to last.Pair them with jeans or dresses for an edgy twist..`} ,
    {id : 18 , category : "shoe" , count : 14 , title : "Amanda" , img : `${process.env.PUBLIC_URL}/imgs/shoe10.jpg` , rate : "4.5" , price : "1100" , des : `Lightweight running shoes designed for both performance and style.Ideal for workouts, errands, or athleisure looks. Lightweight running shoes designed for both performance and style.Ideal for workouts, errands, or athleisure looks.`} ,
    {id : 19 , category : "shoe" , count : 15 , title : "Rachel" , img : `${process.env.PUBLIC_URL}/imgs/shoe11.jpg` , rate : "4.5" , price : "1000" , des : `These mules are the definition of effortless style.Just slip them on and go — chic, easy, and always in trend.These mules are the definition of effortless style.Just slip them on and go — chic, easy, and always in trend.`} ,
    {id : 20 , category : "acc" , count : 16 , title : "Solene" , img : `${process.env.PUBLIC_URL}/imgs/acc1.jpg`, rate : "4.3" , price : "1100" , des : `This bold choker necklace is made for confident fashion lovers.With a sleek band and metallic finish, it adds edge and sophistication.Wear it alone as a standout piece or layer it with longer chains.It brings high-fashion energy to any outfit.Strong, stylish, and unapologetically bold.`} ,
    {id : 21 , category : "acc" , count : 17 , title : "Sense" , img : `${process.env.PUBLIC_URL}/imgs/acc2.jpg`, rate : "3" , price : "1200" , des : `A timeless pearl pendant necklace that exudes classic elegance.Suspended on a dainty chain, the single pearl makes a graceful statement.Ideal for formal events or adding a hint of luxury to your daywear.It’s understated, refined, and endlessly wearable.A piece you'll treasure for years to come.`} ,
    {id : 22 , category : "acc" , count : 0 , title : "Aveline" , img : `${process.env.PUBLIC_URL}/imgs/acc4.jpg`, rate : "2.5" , price : "1100" , des : `This layered necklace features delicate chains of varying lengths for a graceful, cascading look.Perfect for low-cut tops, v-necks, or over a plain tee to add depth.It’s feminine, trendy, and effortlessly stylish.Each layer moves independently, catching the light as you walk.Your new go-to for boho-inspired layering.`} ,
    {id : 23 , category : "acc" , count : 19 , title : "Liora" , img : `${process.env.PUBLIC_URL}/imgs/acc5.jpg`, rate : "3.8" , price : "1400" , des : `Stacked or solo, this minimalist bangle fits right into any jewelry wardrobe.Its simple round silhouette makes it endlessly versatile.Made from high-quality metal that resists tarnishing.Slip it on for an instant touch of shine.Elegant enough for evening, subtle enough for everyday.`} ,
    {id : 24 , category : "acc" , count : 18 , title : "Eloween" , img : `${process.env.PUBLIC_URL}/imgs/acc6.jpg`, rate : "4.2" , price : "2000" , des : `This braided leather bracelet is all about laid-back luxury.Its soft texture and adjustable clasp make it as comfortable as it is cool.Perfect for casual outfits or adding contrast to feminine looks.Unisex appeal with a distinctly stylish touch.A must-have for effortless accessorizing.`} ,
    {id : 25 , category : "acc" , count : 17 , title : "Nahla" , img : `${process.env.PUBLIC_URL}/imgs/acc7.jpg`, rate : "5" , price : "1700" , des : `Elevate your outfit with this chain-link bracelet — bold yet refined.Its chunky design catches the light beautifully and adds a modern twist.Great for statement styling or layering with finer pieces.Polished to perfection for an eye-catching finish.For women who love to mix strength with style.`} ,
    {id : 26 , category : "acc" , count : 16 , title : "Thalia" , img : `${process.env.PUBLIC_URL}/imgs/acc8.jpg`, rate : "4" , price : "1000" , des : `This charm bracelet tells a story — your story.Adorned with tiny meaningful pendants, it's a piece that feels personal and unique.Wear it as a reminder of the moments and memories that matter most.It’s delicate, feminine, and full of sentiment.Ideal for gifting or treating yourself.`} ,
    {id : 27 , category : "acc" , count : 0 , title : "Maris" , img : `${process.env.PUBLIC_URL}/imgs/acc9.jpg`, rate : "2" , price : "1600" , des : `A bohemian dream, this beaded bracelet is vibrant, playful, and full of personality.Crafted with colorful stones and elastic for a comfortable fit.Great for layering or wearing as a standalone piece.It brings energy and color to your look, no matter the season.Perfect for free-spirited souls.`} ,
    {id : 28 , category : "acc" , count : 14 , title : "Nyra" , img : `${process.env.PUBLIC_URL}/imgs/acc10.jpg` , rate : "3.5" , price : "2100" , des : `This sleek cuff bracelet brings effortless sophistication to your wrist.With its polished metal surface and open design, it’s perfect for stacking or wearing solo.It adds instant polish to both workwear and weekend outfits.Durable yet lightweight — a go-to piece for daily elegance.Refined simplicity at its best.`} ,
    {id : 29 , category : "acc" , count : 13 , title : "Seraphina" , img : `${process.env.PUBLIC_URL}/imgs/acc11.jpg` , rate : "4.8" , price : "2200" , des : `Modern, minimalist, and bold — these geometric stud earrings are designed to make a quiet statement.Crafted with clean lines and a smooth finish, they suit both everyday wear and formal occasions.They bring a fresh edge to your look without overwhelming it.Ideal for lovers of contemporary, fuss-free style.Small in size, big on attitude.`} ,
    {id : 30 , category : "acc" , count : 12 , title : "Vesper" , img : `${process.env.PUBLIC_URL}/imgs/acc12.jpg` , rate : "3" , price : "2000" , des : `Bring color into your wardrobe with this vibrant skinny belt.Designed to add a pop of personality to neutral outfits.Its slim shape is perfect for cinching dresses or styling trousers.An easy way to experiment with color without going overboard.Fun, fashionable, and full of energy.`} ,
    {id : 31 , category : "belt" , count : 0 , title : "Calista" , img : `${process.env.PUBLIC_URL}/imgs/belt1.jpg` , rate : "3.3" , price : "3000" , des : `This fabric tie belt is simple, chic, and endlessly versatile.Wrap it once or twice, knot it or bow it — the choice is yours.Made from soft, durable material that won’t slip or wrinkle.Great for wrap dresses, tunics, or adding shape to loose fits.Easy elegance in one long ribbon.`} ,
    {id : 32 , category : "belt" , count : 10 , title : "Mirelle" , img : `${process.env.PUBLIC_URL}/imgs/belt2.jpg` , rate : "4.3" , price : "2100" , des : `Designed for layering, this chain belt drapes elegantly across your hips.Perfect over skirts, dresses, or even blazers.The metallic links catch the light and add instant glam.Adjustable and easy to wear for any body shape.The ultimate blend of sexy and stylish.`} ,
    {id : 33 , category : "belt" , count : 9 , title : "Rowan" , img : `${process.env.PUBLIC_URL}/imgs/belt3.jpg` , rate : "5" , price : "2200" , des : `Inspired by vintage fashion, this wide cinch belt adds retro glam to your outfit.Its bold buckle and smooth finish instantly elevate simple dresses.Perfect for hourglass definition and pin-up inspired styles.Old Hollywood elegance meets modern wearability.Flattering, dramatic, and unforgettable.`} ,
    {id : 34 , category : "belt" , count : 8 , title : "Zephyra" , img : `${process.env.PUBLIC_URL}/imgs/belt4.jpg` , rate : "4.6" , price : "2300" , des : `This transparent belt with metallic details is a fresh, fashion-forward piece.Ideal for styling over crop tops, mesh, or dresses with unique silhouettes.It creates shape without covering up your outfit.A modern choice for creative stylists.Light, edgy, and totally unique.`} ,
    {id : 35 , category : "belt" , count : 7 , title : "Odessa" , img : `${process.env.PUBLIC_URL}/imgs/belt5.jpg` , rate : "4.5" , price : "2400" , des : `Crafted from faux snake skin, this animal-print belt adds a touch of wild sophistication.Its neutral tones keep it versatile, while the texture makes it stand out.Wear it with monochrome outfits for maximum impact.A fierce finishing touch for bold fashionistas.Statement accessory, subtle luxury.`} ,
    {id : 36 , category : "belt" , count : 6 , title : "Lyra" , img : `${process.env.PUBLIC_URL}/imgs/belt6.jpg` , rate : "4.7" , price : "2500" , des : `A double-ring belt that mixes simplicity with utility.No buckle needed — just loop and pull for a sleek, secure fit.Great for minimalist styling or layering over jackets and cardigans.Lightweight and easy to adjust on the go.Style meets function in this modern design.`} ,
    {id : 37 , category : "belt" , count : 0 , title : "Junia" , img : `${process.env.PUBLIC_URL}/imgs/belt7.jpg` , rate : "4" , price : "2600" , des : `Soft, flexible, and ultra-comfortable — this stretch fabric belt is perfect for all-day wear.Its wide band smooths and flatters the waistline beautifully.Ideal for cinching oversized shirts or adding shape to flowy dresses.Stylish enough for fashion lovers, comfortable enough for daily wear.Your waist’s new best friend.`} ,
    {id : 38 , category : "belt" , count : 1 , title : "Elara" , img : `${process.env.PUBLIC_URL}/imgs/belt8.jpg` , rate : "4" , price : "2700" , des : `This metallic belt delivers shine and sophistication in equal measure.Whether worn over a black dress or with denim, it demands attention.The reflective finish adds just the right amount of glam.A go-to accessory for parties, holidays, or standout looks.Turn every outfit into a statement.`} ,
    {id : 39 , category : "belt" , count : 2 , title : "Selene" , img : `${process.env.PUBLIC_URL}/imgs/belt9.jpg` , rate : "3.5" , price : "2800" , des : `Bring color into your wardrobe with this vibrant skinny belt.Designed to add a pop of personality to neutral outfits.Its slim shape is perfect for cinching dresses or styling trousers.An easy way to experiment with color without going overboard.Fun, fashionable, and full of energy`} ,
    {id : 40 , category : "belt" , count : 3 , title : "Isildor" , img : `${process.env.PUBLIC_URL}/imgs/belt10.jpg` , rate : "3.8" , price : "2000" , des : `This classic black leather belt is a must-have foundation piece.Crafted from genuine leather with a matte silver buckle, it pairs with everything.From high-waisted jeans to structured blazers, it adds sleek definition.A versatile piece that balances form and function.Timeless, reliable, and built to last.`} ,
  ]) 
  const[finalProductsInfo , setFinalProductsInfo] = useState([])
  const[swiperIsShown , setSwiperIsShown] = useState(null)
  const[isLogIn , setIsLogIn] = useState(null)
  const[overlayStyle, setOverlayStyle] = useState(null) 

  let swiperRef = useRef(null)

  function handlePrev() {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  function handleNext() {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
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

  useEffect(() => {
    let searchedProduct = []

    allProductsInfo.map(obj => {
      if(obj.title.toLowerCase() === searchContent.trim().toLowerCase()) {
        searchedProduct.push(obj)
      } 
    })
    
    if(searchedProduct.length === 0){
      setSwiperIsShown(false)
    } else {
      setFinalProductsInfo(searchedProduct)
      setSwiperIsShown(true)

    }

  } , [searchContent])

  useEffect(() => {
    let popularProducts = [...finalProductsInfo].sort((a , b) => b.rate - a.rate)

    setFinalProductsInfo(popularProducts)
    setSwiperIsShown(true)
  } , [popularSortTrigger])

  useEffect(() => {
    let earliestProducts = [...finalProductsInfo].sort((a , b) => b.id - a.id)

    setFinalProductsInfo(earliestProducts)
    setSwiperIsShown(true)
  } , [earliestSortTrigger])

  useEffect(() => {
    let latestProducts = [...finalProductsInfo].sort((a , b) => a.id - b.id)

    setFinalProductsInfo(latestProducts)
    setSwiperIsShown(true)
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
  } , [bagsReorderTrigger])

  useEffect(() => {
    setFinalProductsInfo(allProductsInfo)
    setSwiperIsShown(true)
  } , [allReorderTrigger])

  return (
    <>
    <div className='ProductWrapperBottSec-container'>
      {swiperIsShown ?
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
        spaceBetween={4}
        breakpoints={{
          0 : {
            slidesPerView : 1,
          }, 
          500 : {
            slidesPerView : 2,
          } ,
          768 : {
            slidesPerView : 1,
          } ,
          998 : {
            slidesPerView : 2,
          } ,
          1280 : {
            slidesPerView : 4,
          } 
        }}
      >

      {
        finalProductsInfo.map(obj => (
        <SwiperSlide >
          <ProductCard {...obj} key={obj.id} onLogIn={userLogIn}/>
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
             <LeftPagination onLeft={handlePrev}/>
             <RightPagination onRight={handleNext}/>
        </div>
    </div>

    {isLogIn === false && <LogInAlertModal/>}
    <Overlay styleProp={overlayStyle} onOverlay={hideModal}/>
    </>
  )
}
