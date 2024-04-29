import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Lifestyle() {

  const dish = [
    {
      id:1,
      name:'Sashimi',
      img:'c1.jpg'
    },
    {
      id:2,
      name:'Sukiyaki',
      img:'c2.jpeg'
    },
    {
      id:3,
      name:'Yakisoba',
      img:'yakisoba.jpeg'
    },
    {
      id:4,
      name:'Dango',
      img:'dango.jpeg'
    },
  ]
  useEffect(() => {
    AOS.init({duration: 2000})
  },[])

  return (
    <div className='bg-light my-3'>
      <h1 className='fw-bolder text-center'>LifeStyle in Japan <span className='ms-2'><img src='japan.png' style={{ width: '40px' }} className='mb-2' /></span></h1>

      <div className='tradition py-3 px-4'>
        <h3 className='fw-bold'>Japan's Customs and Tradition's</h3>
        <p>Since harmony is very important in Japan, there are many customs, traditions and etiquette rules  to create social bonding between people. Some of the interesting traditions that surprise foreigners are:</p>
        <ol>
          <li>Taking off shoes when entering someone’s house</li>
          <li>Wearing a mask when sick</li>
          <li>Bowing 45 degrees to show respect</li>
          <li>Eating a special meal called “osechi” during the new year’s day</li>
          <li>Participating in the firework festivals or bon odori festivals during the summer by wearing a yukata.</li>
        </ol>
        <div className='text-center' data-aos="flip-right">
          <img src='l1.jpg' className='img-fluid' />
        </div>
      </div>

      <div className='festival py-3 px-4'>
        <h3 className='fw-bold mb-4'>Festivals in Japan</h3>
        <div className=' d-block d-sm-block d-md-flex'>
          <div data-aos = 'flip-left'>
            <img src='l2.jpeg' className='img-fluid' style={{height:'200px',width:'420px'}}/>
          </div>
          <div className='ps-md-3 pt-3 pt-md-0'>
            <p>There are relatively a higher number of festivals in Japan compared to other countries because Japanese religions are related to celebrating the harvest seasons and seasonal changes.</p>
            <ol>
              <li>Gion Festival in Kyoto. The largest parade in Japan which started in the 800’s when there was an epidemic similar to the Coronavirus.</li>
              <li>Awa Odori Festival in Tokushima. A Dance festival held during the Obon-Week (the week when the spirits of the deceased are believed to visit the world).</li>
              <li>Nebuta Festival in Aomori. A festival dedicated to ancient warriors in Northern Japan.</li>
            </ol>
          </div>
        </div>
      </div>

      <div className='etiquette py-3 px-4'>
          <h3 className='fw-bold'>Etiquette in Japanese Culture</h3>
          <p>Since Japanese people believe individuals are less important than the group, everyone strictly follows the rules of the etiquette. Some of the most common etiquette social faux pas foreigners make in Japan are:</p>
          <ol>
              <li>Speaking on the phone while riding a train</li>
              <li>Not returning a personal favor by gifting a box of sweets</li>
              <li>Eating something while walking or eating something on the train</li>
              <li>Taking or giving something by only using one hand</li>
              <li>Showing up for a meeting just in time (People are supposed to come to meetings 5-10 minutes earlier, NOT at the exact beginning time)</li>
            </ol>
        </div>

        <div className='cuisine py-3 px-4'>
          <h3 className='fw-bolder'>Cuisines in Japan</h3>
          <div className='container' >
            <div className='row gx-5'>
            {
              dish.map((val) => (
                <div className='col-12 col-sm-6 col-md-6 col-lg-3 mb-5' key={val.id}>
                  <div className='card  h-100 p-2' data-aos='flip-right'key={val.id}>
                  <img src={val.img} className='rounded' style={{height:'150px'}}/>
                  <div className='card-body'>
                    <p>{val.name}</p>
                  </div>
                </div>
                </div>
              ))
            }
            </div>
          </div>
        </div>

        <div className='constume py-3 px-4'>
          <h3 className='fw-bolder mb-3'>Social Costumes</h3>
          <div className='d-block d-md-flex'>
            <div data-aos = 'flip-right'>
              <img src='cost.webp' style={{height:'230px',width:'350px'}}/>
            </div>
            <div className='ps-md-3 pt-4 pt-md-0'>
              <p>Especially in the more anonymous world of the city, the traditional arranged marriage (miai-kekkon) is being replaced by the love match. It is still common for a family friend, relative, or mentor to act as a go-between (nakodo), even if the marriage is a love match. The wedding ceremony itself often consists of a blend of East and West: a traditional Shintō ceremony, in which the bride and groom wear elaborate kimonos, typically is followed by a Christian-style observance, with the participants in formal Western attire.</p>
              <p>The Japanese have a great fondness for seasonal blossom and leaf viewing. Most popular are the cherry blossoms of spring (in some areas, around Golden Week). Each year the entire country is captivated by the northward progress of the trees’ blossoming—the so-called “cherry blossom front.” This is mirrored in the fall to a lesser degree by the southward progress of the turning maple leaves.</p>
            </div>
          </div>
        </div>
        <p className='text-center'><Link to='/' className='text-black fw-bolder'>Click to go back to Home page</Link></p>
    </div>
  )
}

export default Lifestyle
