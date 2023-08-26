import { Link } from 'react-router-dom'
import style from './PageNotFound.module.scss'

const PageNotFound = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.text}>
				Страница не найдена 😕
				<span>Попробуйте заново</span>
			</div>
			<Link to={'/'}>Back</Link>
		</div>
	)
}
export default PageNotFound
