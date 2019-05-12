import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Graph from './Graph';
import Table from 'react-bootstrap/Table'

export class Stats extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: "profileview",
            profileviews: null,
            companies: []
        }
    }

    componentDidMount() {
        const profileviews = [
            { day: 30, views: 1 },
            { day: 29, views: 131 },
            { day: 28, views: 51 },
            { day: 27, views: 11 },
            { day: 26, views: 0 },
            { day: 25, views: 66 },
            { day: 24, views: 23 },
            { day: 23, views: 13 },
            { day: 22, views: 90 },
            { day: 21, views: 12 },
            { day: 20, views: 10 },
            { day: 19, views: 150 },
            { day: 18, views: 90 },
            { day: 17, views: 9 },
            { day: 16, views: 10 },
            { day: 15, views: 80 },
            { day: 14, views: 55 },
            { day: 13, views: 12 },
            { day: 12, views: 199 },
            { day: 11, views: 10 },
            { day: 10, views: 40 },
            { day: 9, views: 22 },
            { day: 8, views: 1 },
            { day: 7, views: 0 },
            { day: 6, views: 1 },
            { day: 5, views: 0 },
            { day: 4, views: 40 },
            { day: 3, views: 10 },
            { day: 2, views: 19 },
            { day: 1, views: 55 }
        ]

        const companies = [
            {
                "symbol": "EBAY",
                "company": "eBay Inc.",
                "stockValue": "$" + 38.22,
                "investedAmount": "$" + 1250.0,
            },
            {
                "symbol": "AMZN",
                "company": "Amazon.com Inc.",
                "stockValue": "$" + 1574.37,
                "investedAmount": "$" + 750.0,
            },
            {
                "symbol": "INTC",
                "company": "Intel Corp.",
                "stockValue": "$" + 33.50,
                "investedAmount": "$" + 1250.0,
            }
        ]
        //axios.get here
        profileviews.map((d) => { return d.name = d.day + " day ago" })
        this.setState({ profileviews });
        this.setState({
            companies: companies
        })
    }

    render() {
        let companies = this.state.companies
        return (
            <div className="stats">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Symbol</th>
                            <th>Company</th>
                            <th>Stock Value</th>
                            <th>Invested Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map((company, index) => {
                            return <tr key={index}>

                                <td>{index}</td>
                                <td>{company.symbol}</td>
                                <td>{company.company}</td>
                                <td>{company.stockValue}</td>
                                <td>{company.investedAmount}</td>
                            </tr>

                        })
                        }
                    </tbody>
                </Table>

                <h4>Stats</h4><br />
                <Tabs
                    id="controlled-tab-example"
                    activeKey={this.state.key}
                    onSelect={key => this.setState({ key })}
                >
                    {companies.map((company, index) => {
                            return <Tab key={index} eventKey={company.symbol} title={company.company}>
                                <Graph data={this.state.profileviews} />
                            </Tab>
                        })
                        }
                    {/* <Tab eventKey="profileview" title="Profile Views">
                        <Graph data={this.state.profileviews} />
                    </Tab>
                    <Tab eventKey="answerview" title="Answer Views">
                        <Graph data={this.state.profileviews} />
                    </Tab>
                    <Tab eventKey="upvotes" title="Upvotes">
                        <Graph data={this.state.profileviews} />
                    </Tab>
                    <Tab eventKey="downvotes" title="Downvotes">
                        <Graph data={this.state.profileviews} />
                    </Tab>
                    <Tab eventKey="bookmarks" title="Bookmarks">
                        <Graph data={this.state.profileviews} />
                    </Tab> */}
                </Tabs>
            </div>
        )
    }
}

export default Stats
