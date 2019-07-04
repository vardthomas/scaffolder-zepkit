import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SideNav.module.scss';

export default class SideNav extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.list.map(item => (
                        <li key={item.key} className={item.key === this.props.selectedItem.key ? styles.active : styles.item}>
                            <Link to={`/contract/${item.contractName}/${item.definition.name}`}>{item.definition.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}