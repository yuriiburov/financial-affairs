import useAppTheme from '@/hooks/useAppTheme'
import classes from './Ripples.module.scss'

const ripplesData: null[] = new Array(10).fill(null)

const Ripples = () => {
  const { color } = useAppTheme()

  return (
    <div className={classes.ripples}>
      <div className={classes.ripples__box}>
        {ripplesData.map((_, i) => (
          <span
            key={i}
            style={{
              animationDelay: `calc(-1s * ${i + 1})`,
              borderColor: color,
            }}
            className={classes.ripples__item}
          />
        ))}
      </div>
    </div>
  )
}

export default Ripples
