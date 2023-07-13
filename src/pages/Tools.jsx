import { useParams, useNavigate } from 'react-router-dom';
import { useState, useMemo, useRef } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Tools = () => {
    const { envId } = useParams();
    const navigate = useNavigate();

    const cacheModalRef = useRef(null);
    const phpEngineModalRef = useRef(null);
    const container = useRef(null);

    const [scheduleDate, setScheduleDate] = useState('');
    const [scheduleTime, setScheduleTime] = useState('');

    const KinstaAPIUrl = 'https://api.kinsta.com/v2';
    const headers = useMemo(() => {
        return {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_KINSTA_API_KEY}`
        }
    }, [])

    const clearCache = async () => {
        // clear site cache
    }

    const scheduleClearCache = async (e) => {
        e.preventDefault();

        // schedule cache clear
    }

    const restartEngine = async () => {
        // restart PHP engine
    }

    const schedulePhpEngineRestart = async (e) => {
        e.preventDefault();

        // schedule PHP engine restart
    }

    const showCacheModal = () => {
        container.current.classList.add('overlay');
        cacheModalRef.current.style.display = 'block';
    }

    const closeCacheModal = () => {
        container.current.classList.remove('overlay');
        cacheModalRef.current.style.display = 'none';
    }

    const showPhpEngineModal = () => {
        container.current.classList.add('overlay');
        phpEngineModalRef.current.style.display = 'block';
    }

    const closePhpEngineModal = () => {
        container.current.classList.remove('overlay');
        phpEngineModalRef.current.style.display = 'none';
    }

    return (
        <>
            <div className="app-container" ref={container}>
                <Header />
                <p className="description-head">
                    This is a React app that uses the Kinsta API to perform and schedule your site's maintenance tasks.
                </p>
                <div className="flex-container">
                    <div className="sm-container">
                        <div className="sm-container-title">
                            <h1 className="title">Clear Site Cache</h1>
                            <p className="description">
                                Clear your site's cache now or schedule a specific date and time.
                            </p>
                            <div className="flex-btn">
                                <div className="btn" onClick={clearCache}>Clear</div>
                                <div className="btn" onClick={showCacheModal}>Schedule</div>
                            </div>
                        </div>
                    </div>
                    <div className="sm-container">
                        <div className="sm-container-title">
                            <h1 className="title">Restart PHP Engine</h1>
                            <p className="description">
                                Restart your site's PHP engine now or schedule a specific date and time.
                            </p>
                            <div className="flex-btn">
                                <div className="btn" onClick={restartEngine}>Restart</div>
                                <div className="btn" onClick={showPhpEngineModal}>Schedule</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
            <div className="modal" ref={cacheModalRef}>
                <div className="modal-container">
                    <h1 className="title">Schedule Site Cache</h1>
                    <div className="btn-2" onClick={closeCacheModal}>close</div>
                    <form onSubmit={scheduleClearCache}>
                        <div className="input-flex">
                            <div className="input-div">
                                <label>Date</label>
                                <input type="date" className='form-control' value={scheduleDate} onChange={(e) => setScheduleDate(e.target.value)} />
                            </div>
                            <div className="input-div">
                                <label>Time</label>
                                <input className="form-control" list="timeOption" value={scheduleTime} onChange={(e) => setScheduleTime(e.target.value)} />
                                <datalist id="timeOption">
                                    <option value=""></option>
                                    <option value="00:00">12:00 AM</option>
                                    <option value="01:00">1:00 AM</option>
                                    <option value="02:00">2:00 AM</option>
                                    <option value="03:00">3:00 AM</option>
                                    <option value="04:00">4:00 AM</option>
                                    <option value="05:00">5:00 AM</option>
                                    <option value="06:00">6:00 AM</option>
                                    <option value="07:00">7:00 AM</option>
                                    <option value="08:00">8:00 AM</option>
                                    <option value="09:00">9:00 AM</option>
                                    <option value="10:00">10:00 AM</option>
                                    <option value="11:00">11:00 AM</option>
                                    <option value="12:00">12:00 PM</option>
                                    <option value="13:00">1:00 PM</option>
                                    <option value="14:00">2:00 PM</option>
                                    <option value="15:00">3:00 PM</option>
                                    <option value="16:00">4:00 PM</option>
                                    <option value="17:00">5:00 PM</option>
                                    <option value="18:00">6:00 PM</option>
                                    <option value="19:00">7:00 PM</option>
                                    <option value="20:00">8:00 PM</option>
                                    <option value="21:00">9:00 PM</option>
                                    <option value="22:00">10:00 PM</option>
                                    <option value="23:00">11:00 PM</option>
                                </datalist>
                            </div>
                        </div>
                        <button className='btn'>Schedule</button>
                    </form>
                </div>
            </div>
            <div className="modal" ref={phpEngineModalRef}>
                <div className="modal-container">
                    <h1 className="title">Schedule Site Cache</h1>
                    <div className="btn-2" onClick={closePhpEngineModal}>close</div>
                    <form onSubmit={schedulePhpEngineRestart}>
                        <div className="input-flex">
                            <div className="input-div">
                                <label>Date</label>
                                <input type="date" className='form-control' value={scheduleDate} onChange={(e) => setScheduleDate(e.target.value)} />
                            </div>
                            <div className="input-div">
                                <label>Time</label>
                                <input className="form-control" list="timeOption" value={scheduleTime} onChange={(e) => setScheduleTime(e.target.value)} />
                                <datalist id="timeOption">
                                    <option value=""></option>
                                    <option value="00:00">12:00 AM</option>
                                    <option value="01:00">1:00 AM</option>
                                    <option value="02:00">2:00 AM</option>
                                    <option value="03:00">3:00 AM</option>
                                    <option value="04:00">4:00 AM</option>
                                    <option value="05:00">5:00 AM</option>
                                    <option value="06:00">6:00 AM</option>
                                    <option value="07:00">7:00 AM</option>
                                    <option value="08:00">8:00 AM</option>
                                    <option value="09:00">9:00 AM</option>
                                    <option value="10:00">10:00 AM</option>
                                    <option value="11:00">11:00 AM</option>
                                    <option value="12:00">12:00 PM</option>
                                    <option value="13:00">1:00 PM</option>
                                    <option value="14:00">2:00 PM</option>
                                    <option value="15:00">3:00 PM</option>
                                    <option value="16:00">4:00 PM</option>
                                    <option value="17:00">5:00 PM</option>
                                    <option value="18:00">6:00 PM</option>
                                    <option value="19:00">7:00 PM</option>
                                    <option value="20:00">8:00 PM</option>
                                    <option value="21:00">9:00 PM</option>
                                    <option value="22:00">10:00 PM</option>
                                    <option value="23:00">11:00 PM</option>
                                </datalist>
                            </div>
                        </div>
                        <button className='btn'>Schedule</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Tools