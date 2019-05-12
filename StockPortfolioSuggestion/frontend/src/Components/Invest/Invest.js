/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import { Badge, Row, Col, Switch, Card, Divider, Button, InputNumber } from 'antd';




class Invest extends Component {

    state = {
        ethical: false,
        growth: false,
        index: false,
        quality: false,
        value: false
    }

    toggleStrategy = (e) => {
        this.setState({
            [e.target.id]:!this.state[e.target.id]
        })
    }
    render() {

        var ethicalButton = null
        var growthButton = null
        var indexButton = null
        var qualityButton = null
        var valueButton = null
        if(this.state.ethical)
            ethicalButton = <center><Button id="ethical" onClick={this.toggleStrategy} type="primary" block>Selected</Button></center>
        else
            ethicalButton = <center><Button id="ethical" onClick={this.toggleStrategy} block>Select</Button></center>
        if(this.state.growth)
            growthButton = <center><Button id="growth" onClick={this.toggleStrategy} type="primary" block>Selected</Button></center>
        else
            growthButton = <center><Button id="growth" onClick={this.toggleStrategy} block>Select</Button></center>
        if(this.state.index)
            indexButton = <center><Button id="index" onClick={this.toggleStrategy} type="primary" block>Selected</Button></center>    
        else
            indexButton = <center><Button id="index" onClick={this.toggleStrategy} block>Select</Button></center>    
        if(this.state.value)
            valueButton = <center><Button id="value" onClick={this.toggleStrategy} type="primary" block>Selected</Button></center>
        else    
            valueButton = <center><Button id="value" onClick={this.toggleStrategy} block>Select</Button></center>
        if(this.state.quality)
            qualityButton = <center><Button id="quality" onClick={this.toggleStrategy} type="primary" block>Selected</Button></center>
        else    
            qualityButton = <center><Button id="quality" onClick={this.toggleStrategy} block>Select</Button></center>
        return (
            <div class="bg-light">
                <div class="px-5 pt-5">
                    <center>
                        <Link to="/"><h1 class="text-info">Stock Portfolio Suggestion Engine</h1></Link>
                    </center>
                    <Divider></Divider>
                </div>
                <div class="px-3 py-5">
                    <h3 class="px-3">Step 1</h3> 
                    <h4 class="text-secondary px-3">Enter the Amount(in dollars) you want to Invest:</h4>
                    <InputNumber
                        min={1000}
                        step={100}
                        style={{ width: '100%',height:45}}
                    ></InputNumber>
                </div>
                <div class="px-3 py-3">
                <h3 class="px-3">Step 2</h3> 
                <h4 class="px-3 text-secondary">Select upto two Investment Strategies</h4>
                    <Row type="flex">
                        <Col span={6}>
                            <div class="px-3 py-3">
                            <Card
                                bordered={true}
                                title="Ethical Investing"
                                style={{ width:300}}
                            >
                                <p>
                                    Ethical investing, is any investment strategy which seeks to consider both financial return and social good to bring about a positive change.
                                    Recently, it has also become known as "sustainable investing" or "responsible investing".
                                </p>
                                {ethicalButton}
                            </Card>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div class="px-3 py-3">
                            <Card
                                bordered={true}
                                title="Growth Investing"
                                style={{ width:300}}
                            >
                                <p>
                                Growth investing is a style of investment strategy focused on capital appreciation. 
                                Those who follow this style, known as growth investors, invest in companies that exhibit signs of above-average growth.
                                </p>
                                {growthButton}
                            </Card>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div class="px-3 py-3">
                            <Card
                                bordered={true}
                                title="Index Investing"
                                style={{ width:300}}
                            >
                                <p>
                                    Index investing is a passive strategy that attempts to generate similar returns as a broad market index. Investors use index investing to replicate the performance of a specific index – generally an equity or fixed-income index.
                                </p>
                                {indexButton}
                            </Card>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div class="px-3 py-3">
                            <Card
                                bordered={true}
                                title="Quality Investing"
                                style={{ width:300}}
                            >
                                <p>
                                Quality investing strategy is based on a set of clearly defined fundamental criteria that seeks to identify companies with outstanding quality characteristics.
                                It supports best overall rather than best-in-class approach.
                                </p>
                                {qualityButton}
                            </Card>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div class="px-3 py-3">
                            <Card
                                bordered={true}
                                title="Value Investing"
                                style={{ width:300}}
                            >
                                <p>
                                Value investing is an investment tactic where stocks are selected which appear to trade for less than their intrinsic, or book, values. Value investors actively seek out the stocks they believe the market has undervalued.
                                </p>
                                {valueButton}
                            </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div class="px-3 py-3">
                    <center>
                    <Link to="/invest">
                        <Button
                            type="primary"
                            style={{width:500,height:50}}
                        >Invest</Button>
                    </Link>
                    </center>
                </div>
            </div>
        )
    }
}

export default Invest;