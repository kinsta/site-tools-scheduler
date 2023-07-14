import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    const navigate = useNavigate();

    const [sites, setSites] = useState([]);
    const [selectedSiteId, setSelectedSiteId] = useState('');

    const KinstaAPIUrl = 'https://api.kinsta.com/v2';
    const headers = useMemo(() => {
        return {
            Authorization: `Bearer ${process.env.REACT_APP_KINSTA_API_KEY}`
        }
    }, [])

    useEffect(() => {
        const fetchAllSites = async () => {
            const query = new URLSearchParams({
                company: process.env.REACT_APP_KINSTA_COMPANY_ID,
            }).toString();

            const resp = await fetch(
                `${KinstaAPIUrl}/sites?${query}`,
                {
                    method: 'GET',
                    headers
                }
            );

            const data = await resp.json();
            setSites(data.company.sites);
        }
        fetchAllSites();
    }, [headers])

    const handleSubmission = (e) => {
        e.preventDefault();

        const fetchEnvironmentId = async (siteId) => {
            const resp = await fetch(
                `${KinstaAPIUrl}/sites/${siteId}/environments`,
                {
                    method: 'GET',
                    headers
                }
            );

            const data = await resp.json();
            let envId = data.site.environments[0].id;
            navigate(`/tools/${envId}`)
        }
        fetchEnvironmentId(selectedSiteId);
    }

    return (
        <div className="app-container">
            <Header />
            <div className="container">
                <div className="container-title">
                    <h1 className="title">Site Tools Scheduler with Kinsta API</h1>
                    <p className="description">
                        This is a React app that uses the Kinsta API to perform maintenance tasks on your site (clear cache and restart PHP engine), without needing to access MyKinsta.
                    </p>
                </div>
                <form onSubmit={handleSubmission}>
                    <div className="form-container">
                        <div className="input-div">
                            <label>Select a site</label>
                            <span>Select the site you want to either clear cache or restart PHP engine.</span>
                            <select className="form-control" value={selectedSiteId} onChange={(e) => setSelectedSiteId(e.target.value)}>
                                <option value=""></option>
                                {sites && (
                                    sites.map((site) => {
                                        return (
                                            <option key={site.id} value={site.id}>{site.display_name}</option>
                                        )
                                    })
                                )}
                            </select>
                        </div>
                        <button className='btn'>Proceed</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div >
    )
}

export default Home