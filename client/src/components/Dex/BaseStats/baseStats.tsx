import './baseStats.css';
import Attack from '../../../assets/img/Attack.svg';
import Defense from '../../../assets/img/Defence.svg';
import Speed from '../../../assets/img/Speed.svg';
import { iBeastDex } from '../../../data/beastDex';

const statsItems = [
  { label: "Attack", value: (beast: iBeastDex) => Math.round(Number(beast.Attack)), pic: Attack },
  { label: "Defense", value: (beast: iBeastDex) => Math.round(Number(beast.Defense)), pic: Defense },
  { label: "Speed", value: (beast: iBeastDex) => Math.round(Number(beast.Speed)), pic: Speed }
];

interface StatsCarouselProps {
  beast: iBeastDex;
}

function BaseStats({ beast }: StatsCarouselProps): JSX.Element {
  return (
    <div className="stats-dex">
      {statsItems.map(({ label, value, pic }) => (
        <div className="item-dex" key={label}>
          <div className="stats-label-dex">
            <img src={pic} alt={label} />
            <label>{label}</label>
          </div>
          <div className={`stats-value-dex ${label}`}>
            <div className="progress-bar-dex">
              <div className="progress-dex" style={{ width: `${value(beast) * 10}%` }}></div>
            </div>
            <span>{value(beast)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BaseStats;
