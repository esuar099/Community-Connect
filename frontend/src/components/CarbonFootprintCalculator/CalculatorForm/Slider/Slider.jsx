import styles from "./Slider.module.scss";

export function Slider({
  title,
  units,
  value,
  setValue,
  min,
  max,
  step,
  children,
}) {
  function sliderLabel(units) {
    return units.map((val) => {
      return (
        <div className={styles.sliderLabel} key={val}>
          <div className={styles.sliderTick}>|</div>
          <div className={styles.sliderNumber}>{val}</div>
        </div>
      );
    });
  }
  return (
    <div className={styles.mainContainer}>
      <h6 className={styles.sliderTitle}>{title}</h6>
      {children}
      <input
        className={styles.slider}
        name="range"
        type="range"
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={styles.sliderLabelContainer}>{sliderLabel(units)}</div>
    </div>
  );
}
