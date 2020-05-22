import React from 'react'

export default function Card({key,email, name, image , styles}) {

    
    return (
        <div key={key} style={{...styles.card}}>

            <img style={styles.img} src={`https://robohash.org/${image}?200x200`} alt={image.alt} />
            
            <div style={styles.infos}>  
                <h5>{name}</h5>

                 <span>{email}</span>
            </div>

        </div>
    )
}
