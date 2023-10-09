// [
//   { "id": "id-1", "label": ".docx", "percentage": 22 },
//   { "id": "id-2", "label": ".pdf", "percentage": 4 },
//   { "id": "id-3", "label": ".mp3", "percentage": 17 },
//   { "id": "id-4", "label": ".psd", "percentage": 47 },
//   { "id": "id-5", "label": ".pdf", "percentage": 10 }
// ]
import PropTypes from 'prop-types';

export default function Statistics({title, stats}) {
    return (
        <section class="statistics">
            {title && <h2 class="title">{title}</h2>}

            <ul class="stat-list">
                <li class="item">
                    <span class="label">{stats.label}</span>
                    <span class="percentage">{stats.percentage}%</span>
                </li>
                <li class="item">
                    <span class="label">{stats.label}</span>
                    <span class="percentage">{stats.percentage}%</span>
                </li>
                <li class="item">
                    <span class="label">{stats.label}</span>
                    <span class="percentage">{stats.percentage}%</span>
                </li>
                <li class="item">
                    <span class="label">{stats.label}</span>
                    <span class="percentage">{stats.percentage}%</span>
                </li>
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        percentage: PropTypes.number.isRequired,
    }))
};