import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SideNav.module.scss';

export default class SideNav extends React.Component {

    render() {

        const reads = []
        const sends = []

        this.props.list.map(item => {
            if (item.definition.constant === true){
                reads.push(item)
            }
            else{
                sends.push(item)
            }
        })

        return (
            <div>
                <h3 className={styles.contractName}>{this.props.contractName}</h3>

                <h4 className={styles.functionHeaders}>Reads()</h4>
                <ul className={styles.functionList}>
                    {reads.map(item => (
                        <li key={item.key} className={item.key === this.props.selectedItem. key ? styles.active : styles.item}>
                            <Link to={`/contract/${item.contractName}/${item.definition.name}`}>{item.definition.name}</Link>
                        </li>
                    ))}
                </ul>

                <h4 className={styles.functionHeaders}>Writes()</h4>
                <ul className={styles.functionList}>
                    {sends.map(item => (
                        <li key={item.key} className={item.key === this.props.selectedItem. key ? styles.active : styles.item}>
                            <Link to={`/contract/${item.contractName}/${item.definition.name}`}>{item.definition.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}