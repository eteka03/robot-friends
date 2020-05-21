import React from 'react'

import Card from './Card'

export default function CardList({datas}) {

const styles = {
    card:{backgroundColor:'yellow' , width:'300px' , height:'200px',margin:'3px'},
    infos:{textAlign:'center'},
    img:{objectFit:'contain',width:'100%' , height:'50%'}
}
    return (

     
         <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around', paddingTop:'2rem'}}>
            {datas.map(robot => <Card 
                                key={datas.id}
                                email={robot.email}
                                name= {robot.name}
                                image = {robot.name}
                                styles={styles}
                                />)}
        </div> 
    )
}
