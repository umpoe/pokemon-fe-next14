'use client'
import { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const data = {
    "data": [
      {
        "id": 1,
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/",
        "createdAt": "2024-01-08T12:16:25.560Z",
        "updatedAt": "2024-01-08T12:16:25.560Z",
        "pokemon_detail": {
          "id": 1,
          "pokemon_id": 1,
          "species_name": "bulbasaur",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
          "weight": 69,
          "height": 7,
          "createdAt": "2024-01-08T12:16:27.120Z",
          "updatedAt": "2024-01-08T12:16:27.120Z"
        }
      },
      {
        "id": 2,
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/",
        "createdAt": "2024-01-08T12:16:27.170Z",
        "updatedAt": "2024-01-08T12:16:27.170Z",
        "pokemon_detail": {
          "id": 2,
          "pokemon_id": 2,
          "species_name": "ivysaur",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
          "weight": 130,
          "height": 10,
          "createdAt": "2024-01-08T12:16:28.146Z",
          "updatedAt": "2024-01-08T12:16:28.146Z"
        }
      },
      {
        "id": 3,
        "name": "venusaur",
        "url": "https://pokeapi.co/api/v2/pokemon/3/",
        "createdAt": "2024-01-08T12:16:28.191Z",
        "updatedAt": "2024-01-08T12:16:28.191Z",
        "pokemon_detail": {
          "id": 3,
          "pokemon_id": 3,
          "species_name": "venusaur",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/3.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
          "weight": 1000,
          "height": 20,
          "createdAt": "2024-01-08T12:16:28.823Z",
          "updatedAt": "2024-01-08T12:16:28.823Z"
        }
      },
      {
        "id": 4,
        "name": "charmander",
        "url": "https://pokeapi.co/api/v2/pokemon/4/",
        "createdAt": "2024-01-08T12:16:28.892Z",
        "updatedAt": "2024-01-08T12:16:28.892Z",
        "pokemon_detail": {
          "id": 4,
          "pokemon_id": 4,
          "species_name": "charmander",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
          "weight": 85,
          "height": 6,
          "createdAt": "2024-01-08T12:16:29.539Z",
          "updatedAt": "2024-01-08T12:16:29.539Z"
        }
      },
      {
        "id": 5,
        "name": "charmeleon",
        "url": "https://pokeapi.co/api/v2/pokemon/5/",
        "createdAt": "2024-01-08T12:16:29.573Z",
        "updatedAt": "2024-01-08T12:16:29.573Z",
        "pokemon_detail": {
          "id": 5,
          "pokemon_id": 5,
          "species_name": "charmeleon",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/5.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png",
          "weight": 190,
          "height": 11,
          "createdAt": "2024-01-08T12:16:30.158Z",
          "updatedAt": "2024-01-08T12:16:30.158Z"
        }
      },
      {
        "id": 6,
        "name": "charizard",
        "url": "https://pokeapi.co/api/v2/pokemon/6/",
        "createdAt": "2024-01-08T12:16:30.213Z",
        "updatedAt": "2024-01-08T12:16:30.213Z",
        "pokemon_detail": {
          "id": 6,
          "pokemon_id": 6,
          "species_name": "charizard",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
          "weight": 905,
          "height": 17,
          "createdAt": "2024-01-08T12:16:30.815Z",
          "updatedAt": "2024-01-08T12:16:30.815Z"
        }
      },
      {
        "id": 7,
        "name": "squirtle",
        "url": "https://pokeapi.co/api/v2/pokemon/7/",
        "createdAt": "2024-01-08T12:16:30.963Z",
        "updatedAt": "2024-01-08T12:16:30.963Z",
        "pokemon_detail": {
          "id": 7,
          "pokemon_id": 7,
          "species_name": "squirtle",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
          "weight": 90,
          "height": 5,
          "createdAt": "2024-01-08T12:16:31.971Z",
          "updatedAt": "2024-01-08T12:16:31.971Z"
        }
      },
      {
        "id": 8,
        "name": "wartortle",
        "url": "https://pokeapi.co/api/v2/pokemon/8/",
        "createdAt": "2024-01-08T12:16:32.011Z",
        "updatedAt": "2024-01-08T12:16:32.011Z",
        "pokemon_detail": {
          "id": 8,
          "pokemon_id": 8,
          "species_name": "wartortle",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/8.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/8.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png",
          "weight": 225,
          "height": 10,
          "createdAt": "2024-01-08T12:16:32.621Z",
          "updatedAt": "2024-01-08T12:16:32.621Z"
        }
      },
      {
        "id": 9,
        "name": "blastoise",
        "url": "https://pokeapi.co/api/v2/pokemon/9/",
        "createdAt": "2024-01-08T12:16:32.648Z",
        "updatedAt": "2024-01-08T12:16:32.648Z",
        "pokemon_detail": {
          "id": 9,
          "pokemon_id": 9,
          "species_name": "blastoise",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/9.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
          "weight": 855,
          "height": 16,
          "createdAt": "2024-01-08T12:16:33.244Z",
          "updatedAt": "2024-01-08T12:16:33.244Z"
        }
      },
      {
        "id": 10,
        "name": "caterpie",
        "url": "https://pokeapi.co/api/v2/pokemon/10/",
        "createdAt": "2024-01-08T12:16:33.342Z",
        "updatedAt": "2024-01-08T12:16:33.342Z",
        "pokemon_detail": {
          "id": 10,
          "pokemon_id": 10,
          "species_name": "caterpie",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/10.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png",
          "weight": 29,
          "height": 3,
          "createdAt": "2024-01-08T12:16:33.941Z",
          "updatedAt": "2024-01-08T12:16:33.941Z"
        }
      },
      {
        "id": 11,
        "name": "metapod",
        "url": "https://pokeapi.co/api/v2/pokemon/11/",
        "createdAt": "2024-01-08T12:16:33.974Z",
        "updatedAt": "2024-01-08T12:16:33.974Z",
        "pokemon_detail": {
          "id": 11,
          "pokemon_id": 11,
          "species_name": "metapod",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/11.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/11.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png",
          "weight": 99,
          "height": 7,
          "createdAt": "2024-01-08T12:16:34.555Z",
          "updatedAt": "2024-01-08T12:16:34.555Z"
        }
      },
      {
        "id": 12,
        "name": "butterfree",
        "url": "https://pokeapi.co/api/v2/pokemon/12/",
        "createdAt": "2024-01-08T12:16:34.593Z",
        "updatedAt": "2024-01-08T12:16:34.593Z",
        "pokemon_detail": {
          "id": 12,
          "pokemon_id": 12,
          "species_name": "butterfree",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/12.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/12.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
          "weight": 320,
          "height": 11,
          "createdAt": "2024-01-08T12:16:35.258Z",
          "updatedAt": "2024-01-08T12:16:35.258Z"
        }
      },
      {
        "id": 13,
        "name": "weedle",
        "url": "https://pokeapi.co/api/v2/pokemon/13/",
        "createdAt": "2024-01-08T12:16:35.290Z",
        "updatedAt": "2024-01-08T12:16:35.290Z",
        "pokemon_detail": {
          "id": 13,
          "pokemon_id": 13,
          "species_name": "weedle",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/13.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/13.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png",
          "weight": 32,
          "height": 3,
          "createdAt": "2024-01-08T12:16:35.935Z",
          "updatedAt": "2024-01-08T12:16:35.935Z"
        }
      },
      {
        "id": 14,
        "name": "kakuna",
        "url": "https://pokeapi.co/api/v2/pokemon/14/",
        "createdAt": "2024-01-08T12:16:35.978Z",
        "updatedAt": "2024-01-08T12:16:35.978Z",
        "pokemon_detail": {
          "id": 14,
          "pokemon_id": 14,
          "species_name": "kakuna",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/14.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/14.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png",
          "weight": 100,
          "height": 6,
          "createdAt": "2024-01-08T12:16:37.009Z",
          "updatedAt": "2024-01-08T12:16:37.009Z"
        }
      },
      {
        "id": 15,
        "name": "beedrill",
        "url": "https://pokeapi.co/api/v2/pokemon/15/",
        "createdAt": "2024-01-08T12:16:37.036Z",
        "updatedAt": "2024-01-08T12:16:37.036Z",
        "pokemon_detail": {
          "id": 15,
          "pokemon_id": 15,
          "species_name": "beedrill",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/15.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/15.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png",
          "weight": 295,
          "height": 10,
          "createdAt": "2024-01-08T12:16:38.005Z",
          "updatedAt": "2024-01-08T12:16:38.005Z"
        }
      },
      {
        "id": 16,
        "name": "pidgey",
        "url": "https://pokeapi.co/api/v2/pokemon/16/",
        "createdAt": "2024-01-08T12:16:38.055Z",
        "updatedAt": "2024-01-08T12:16:38.055Z",
        "pokemon_detail": {
          "id": 16,
          "pokemon_id": 16,
          "species_name": "pidgey",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/16.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/16.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png",
          "weight": 18,
          "height": 3,
          "createdAt": "2024-01-08T12:16:39.095Z",
          "updatedAt": "2024-01-08T12:16:39.095Z"
        }
      },
      {
        "id": 17,
        "name": "pidgeotto",
        "url": "https://pokeapi.co/api/v2/pokemon/17/",
        "createdAt": "2024-01-08T12:16:39.132Z",
        "updatedAt": "2024-01-08T12:16:39.132Z",
        "pokemon_detail": {
          "id": 17,
          "pokemon_id": 17,
          "species_name": "pidgeotto",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/17.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/17.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png",
          "weight": 300,
          "height": 11,
          "createdAt": "2024-01-08T12:16:39.740Z",
          "updatedAt": "2024-01-08T12:16:39.740Z"
        }
      },
      {
        "id": 18,
        "name": "pidgeot",
        "url": "https://pokeapi.co/api/v2/pokemon/18/",
        "createdAt": "2024-01-08T12:16:39.862Z",
        "updatedAt": "2024-01-08T12:16:39.862Z",
        "pokemon_detail": {
          "id": 18,
          "pokemon_id": 18,
          "species_name": "pidgeot",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/18.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/18.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png",
          "weight": 395,
          "height": 15,
          "createdAt": "2024-01-08T12:16:40.605Z",
          "updatedAt": "2024-01-08T12:16:40.605Z"
        }
      },
      {
        "id": 19,
        "name": "rattata",
        "url": "https://pokeapi.co/api/v2/pokemon/19/",
        "createdAt": "2024-01-08T12:16:40.657Z",
        "updatedAt": "2024-01-08T12:16:40.657Z",
        "pokemon_detail": {
          "id": 19,
          "pokemon_id": 19,
          "species_name": "rattata",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/19.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/19.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png",
          "weight": 35,
          "height": 3,
          "createdAt": "2024-01-08T12:16:42.281Z",
          "updatedAt": "2024-01-08T12:16:42.281Z"
        }
      },
      {
        "id": 669,
        "name": "flabebe",
        "url": "https://pokeapi.co/api/v2/pokemon/669/",
        "createdAt": "2024-01-08T12:24:58.424Z",
        "updatedAt": "2024-01-08T12:24:58.424Z",
        "pokemon_detail": {
          "id": 669,
          "pokemon_id": 669,
          "species_name": "flabebe",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/669.png",
          "back_shiny": null,
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png",
          "back_default": null,
          "weight": 1,
          "height": 1,
          "createdAt": "2024-01-08T12:24:59.106Z",
          "updatedAt": "2024-01-08T12:24:59.106Z"
        }
      }
    ],
    "totalItems": 1302,
    "totalPages": 66,
    "currentPage": 1,
    "limit": 20
  }
  const addPokemon = async (pokemonItem) => {

    const isPokemonExists = await pokemons.some(pokemon => pokemon.id == pokemonItem.id);
    console.log({ pokemonItem, isPokemonExists })
    if (!isPokemonExists && pokemons.length < 6) {
      setPokemons([...pokemons, pokemonItem])
    }
  }

  const removePokemon = ( pokemonId) => {
    const index = pokemons.findIndex(pokemon => pokemon.id === pokemonId);

    if (index !== -1) {
        const newPokemons = [...pokemons]; 
        newPokemons.splice(index, 1); 
        setPokemons(newPokemons);
    }
}


  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const display_settings = {
    dots: true,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };
  
  return (
    <div className="w-3/4 m-auto">
      <div className="m-20">
        <Slider {...settings}>
        {data.data.map((d) => {
                const [imgSrc, setImgSrc] = useState(d.pokemon_detail.front_default);

                return (
                    <div key={d.id} className='bg-white h-[350px] text-black rounded-xl'>
                        <div className='rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                            <img 
                                src={imgSrc} 
                                alt={d.name} 
                                className='h-44 w-44 rounded-full'
                                onMouseEnter={() => setImgSrc(d.pokemon_detail.front_shiny)}
                                onMouseLeave={() => setImgSrc(d.pokemon_detail.front_default)}
                            />
                        </div>
                        <div className='flex flex-col just-center items-center gap-2 p-2'>
                            <p className="text-xl font-semibold">{d.name}</p>
                            <p>weight: {d.pokemon_detail.weight}</p>
                            <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl' onClick={() => addPokemon(d)}>Select</button>
                        </div>
                    </div>
                );
            })}
        </Slider>

        <h1 className='text-3xl font-bold text-slate-50'>  POKEMONS Selected: ({pokemons.length})</h1>

        <Slider {...display_settings}>
          {pokemons.map((d) => {

             return (
                 <div key={d.id} className='bg-white h-[250px] text-black rounded-xl'>
                     <div className='rounded-t-xl bg-yellow-200 flex justify-center items-center'>
                         <img 
                            src={d.pokemon_detail.front_default} 
                            alt={d.name} 
                            className='h-44 w-44 rounded-full'
                         />
                     </div>
                     <div className='flex flex-col just-center items-center gap-2 p-2'>
                         <p className="text-xl font-semibold">{d.name}</p>
                         <p>weight: {d.pokemon_detail.weight}</p>
                         <button className='bg-red-500 text-white text-lg px-6 py-1 rounded-xl' onClick={() => removePokemon(d.id)}>Remove</button>
                     </div>
                 </div>
             );
              } )}
        
        </Slider>

      </div>

    </div>
  )
}
