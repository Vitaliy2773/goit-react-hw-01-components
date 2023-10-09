import Statistics from "./Statistics";
import PropTypes from 'prop-types';

export default function StatisticsList({items}) {
    return (
        <ul> {
            items.map(item => (
                <li key={item.id}>
                    <Statistics/>
                </li>
            ))
        }
       
        </ul>
    )
}