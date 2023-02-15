import React from 'react'
import './Feature.scss';
const Feature = () => {
    return (
        <div className='feature'>
            <div className='wrapper'>
                <div className="feature-item">
                    <div className='img'>
                        <img src="https://images.unsplash.com/photo-1571781418606-70265b9cce90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGlsZXMlMjAlMjYlMjBncmFuaXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                    </div>
                    <span>Bathroom</span>
                </div>
                <div className="feature-item">
                    <div className='img'>
                        <img src="https://images.unsplash.com/photo-1511189975737-b5939ef6a944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGlsZXMlMjAlMjYlMjBncmFuaXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                    </div>
                    <span>Kitchen</span>
                </div>
                <div className="feature-item">
                    <div className='img'>
                        <img src="https://images.unsplash.com/photo-1584354273341-3eb96574e5be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                    </div>
                    <span>Wall</span>
                </div>
                <div className="feature-item">
                    <div className='img'>
                        <img src="https://images.unsplash.com/photo-1600421495550-158936f5ecfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFyYmxlJTIwZmxvb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
                    </div>
                    <span>Floor</span>
                </div>
            </div>

        </div>
    )
}

export default Feature