import React from 'react'
import Bucket from '../components/Bucket'

class BucketView extends React.Component {
    render() {
        return (
            <div className='bucket-container container'>
                <div className="row">
                    <Bucket />
                    <Bucket />
                    <Bucket />
                    <Bucket />
                    <Bucket />
                    <Bucket />
                </div>
            </div>
        )
    }
}

export default BucketView