import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Schedule = () => {
    const { date, time } = useParams();
    return (
        <div className="app-container">
            <Header />
            <div className="container">
                <div className="container-title">
                    <h1 className="title">Site Tools Scheduler</h1>
                    <p>
                        Once it's time, you will be navigated automatically to the Operations status page where you'll be able to track the progress of the operation.
                    </p>
                </div>
                <div className="services">
                    <div className="details">
                        <p>This operation is scheduled to occur on <b>{date}</b> by <b>{time}</b>.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Schedule