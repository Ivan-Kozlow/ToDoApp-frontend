import { Link } from 'react-router-dom'
import style from './ErrorPage.module.scss'

interface IPropsErrorPage {
	title: string
	subTitle: string
}

const PageInDev: React.FC<IPropsErrorPage> = ({ title, subTitle }) => {
	return (
		<div className={style.wrapper}>
			<div className={style.text}>
				{title}
				<span>{subTitle}</span>
			</div>
			<Link to={'/'}>Back</Link>
		</div>
	)
}

export default PageInDev
