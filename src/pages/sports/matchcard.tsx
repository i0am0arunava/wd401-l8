import "./sport.css"

import  { useState, useEffect } from 'react';
interface LiveScore {
  id: number;
  isRunning: boolean;
  name: string;
  location: string;
  startsAt: string;
  endsAt: string;
  score: { [key: string]: string };

  sportName: string;
  playingTeam: number;
  story: string;
}

const initialLiveScore: LiveScore = {
  id: 0,
  isRunning: true,
  name: "",
  location: "",
  startsAt: "",
  endsAt: "",
  score: { team1: "", team2: "" },
 
  sportName: "",
  playingTeam: 0,
  story: "",
};
const MatchCard = (props: { match: number; }) => {
    const [fetchednewart, setFetchednew] = useState<LiveScore>( initialLiveScore);
    const token = localStorage.getItem("authToken")
    useEffect(() => {
      fetch(`https://wd301-capstone-api.pupilfirst.school/matches/${props.match}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          setFetchednew(data);
        })
        .catch(error => {
          console.error(error.message);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);


    const takesport=(q: number)=>{
      const token = localStorage.getItem("authToken")
      fetch(`https://wd301-capstone-api.pupilfirst.school/matches/${q}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          setFetchednew(data);
          console.log("updated",q)
          
        })
        .catch(error => {
          console.error(error.message);
        });
    }




  return (
    <div>
        {Object.keys(fetchednewart.score || {}).map((key) => (
            <div key={key} className="score">

                <span className="team">{key}</span>
                <span  >{fetchednewart.score[key]}</span>
            </div>
        ))}


<div className="refbut"  onClick={()=>takesport(props.match)}><svg
             
             onClick={() => {
               const refresh = document.getElementsByClassName(`refresh${props.match}`)[0];
               refresh.classList.add('rotateAnimation');

               // Remove the rotateAnimation class after 1 second (adjust as needed)
               setTimeout(() => refresh.classList.remove('rotateAnimation'), 1000);
             }}
             className={`refresh${props.match}`}
             xmlns="http://www.w3.org/2000/svg"
             width="1em"
             height="1em"
             viewBox="0 0 24 24"
           >
             <path
               fill="none"
               stroke="currentColor"
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d="M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"
             />
           </svg>
           </div>
    </div>
  );
};

export default MatchCard;
