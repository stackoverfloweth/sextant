import React from 'react'

class Bucket extends React.Component {

    bucketItem(ticketNumber, height) {
        return (
            <div className='bucket-item' style={{ height: `${height}%` }}>{ticketNumber}</div>
        )
    }

    render() {
        return (
            <div className='dev-bucket col-md-3 col-lg-2'>
                <div className='bucket-content'>
                    {this.bucketItem('CHID-1036', 10)}
                    {this.bucketItem('CIE-52', 40)}
                    {this.bucketItem('FT-117', 50)}
                </div>
            </div>
        )
    }
}

export default Bucket