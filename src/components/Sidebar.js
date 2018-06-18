import React from 'react'

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedTab: this.props.tabs ? this.props.tabs[0] : { content: null },
        }
    }
    updateSelectedTab = (tab) => {
        this.setState({ selectedTab: tab })
    }
    getNavItems = () => {
        return this.props.tabs.map((tab) => {
            return (
                <li className="nav-item" key={tab.title}>
                    <a className={tab.title === this.state.selectedTab.title ? "nav-link active" : "nav-link"} role="tab" aria-controls={tab.title}
                        aria-selected="true" onClick={() => { this.updateSelectedTab(tab) }}>{tab.title}</a>
                </li>
            )
        })
    }
    render() {
        return (
            <div className="sidebar">
                <div className="col">
                    <ul className="nav nav-pills nav-fill">
                        {this.getNavItems()}
                    </ul>
                    {this.state.selectedTab.content}
                </div>
            </div>
        )
    }
}