import CardItem from './CardItem'; // Import the CommunityCard component
import gaming1 from '../assets/gaming1.jpg'
const communities = [
    {
      category: 'Sports',
      rank: 5,
      //image: '/placeholder.svg?height=300&width=400',
      image: {gaming1},
      //icon: '/placeholder.svg?height=40&width=40',
      title: 'FOTBALOVÁ AKADEMIE ',
      description: 'staň se součástí té nejlepší fotbalové CZ/SK komunity, která tě posune na úplně jiný level⚽️ VYZKOUŠEJ SI TO NA 7 DNÍ ZDARMA',
      members: '125',
      price: '$10/month',
      isPrivate: true
    },
    {
      category: 'Gaming',
      rank: 5,
      image: {gaming1},
      //icon: '/placeholder.svg?height=40&width=40',
      title: 'We Teach League',
      description: 'The community for people who are serious about improving at League of Legends',
      members: '3.2k',
      price: 'Free',
      isPrivate: true
    },
    {
      category: 'Music',
      rank: 1,
      //image: '/placeholder.svg?height=300&width=400',
      image: {gaming1},
      //icon: '/placeholder.svg?height=40&width=40',
      title: 'Unison Growth Hub',
      description: 'The #1 free community for music producers to grow, learn, connect and simplify the process of producing pro-quality music',
      members: '22.9k',
      price: 'Free',
      isPrivate: true
    },
    {
        category: 'Sports',
        rank: 5,
        //image: '/placeholder.svg?height=300&width=400',
        image: {gaming1},
        //icon: '/placeholder.svg?height=40&width=40',
        title: 'FOTBALOVÁ AKADEMIE ',
        description: 'staň se součástí té nejlepší fotbalové CZ/SK komunity, která tě posune na úplně jiný level⚽️ VYZKOUŠEJ SI TO NA 7 DNÍ ZDARMA',
        members: '125',
        price: '$10/month',
        isPrivate: true
      },
      {
        category: 'Sports',
        rank: 5,
        //image: '/placeholder.svg?height=300&width=400',
        image: {gaming1},
        //icon: '/placeholder.svg?height=40&width=40',
        title: 'FOTBALOVÁ AKADEMIE ',
        description: 'staň se součástí té nejlepší fotbalové CZ/SK komunity, která tě posune na úplně jiný level⚽️ VYZKOUŠEJ SI TO NA 7 DNÍ ZDARMA',
        members: '125',
        price: '$10/month',
        isPrivate: true
      },
      {
        category: 'Sports',
        rank: 5,
        //image: '/placeholder.svg?height=300&width=400',
        image: {gaming1},
        //icon: '/placeholder.svg?height=40&width=40',
        title: 'FOTBALOVÁ AKADEMIE ',
        description: 'staň se součástí té nejlepší fotbalové CZ/SK komunity, která tě posune na úplně jiný level⚽️ VYZKOUŠEJ SI TO NA 7 DNÍ ZDARMA',
        members: '125',
        price: '$10/month',
        isPrivate: true
      },
      {
        category: 'Sports',
        rank: 5,
        //image: '/placeholder.svg?height=300&width=400',
        image: {gaming1},
        //icon: '/placeholder.svg?height=40&width=40',
        title: 'FOTBALOVÁ AKADEMIE ',
        description: 'staň se součástí té nejlepší fotbalové CZ/SK komunity, která tě posune na úplně jiný level⚽️ VYZKOUŠEJ SI TO NA 7 DNÍ ZDARMA',
        members: '125',
        price: '$10/month',
        isPrivate: true
      },
      {
        category: 'Sports',
        rank: 5,
        //image: '/placeholder.svg?height=300&width=400',
        image: {gaming1},
        //icon: '/placeholder.svg?height=40&width=40',
        title: 'FOTBALOVÁ AKADEMIE ',
        description: 'staň se součástí té nejlepší fotbalové CZ/SK komunity, která tě posune na úplně jiný level⚽️ VYZKOUŠEJ SI TO NA 7 DNÍ ZDARMA',
        members: '125',
        price: '$10/month',
        isPrivate: true
      },
      {
        category: 'Sports',
        rank: 5,
        //image: '/placeholder.svg?height=300&width=400',
        image: {gaming1},
        //icon: '/placeholder.svg?height=40&width=40',
        title: 'FOTBALOVÁ AKADEMIE ',
        description: 'staň se součástí té nejlepší fotbalové CZ/SK komunity, která tě posune na úplně jiný level⚽️ VYZKOUŠEJ SI TO NA 7 DNÍ ZDARMA',
        members: '125',
        price: '$10/month',
        isPrivate: true
      },
     
     
     

  ];

export default function Card() {
  return (
    <div className="container mx-auto p-6 max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map((community, index) => (
          <CardItem key={index} {...community} ></CardItem>
        ))}
      </div>
    </div>
  );
};
