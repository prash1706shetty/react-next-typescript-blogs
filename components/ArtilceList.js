import articleStyle from '../styles/Article.module.css'
import ArticleItem from './ArticleItem';
import { CalculateFactorial } from './CalculateFactorial';

const ArtilceList = ({articles}) => {
    return (
        <div className={articleStyle.grid}>
            {articles.map(article => (
            
            <ArticleItem article={article}/>
            ))}
            <CalculateFactorial />
        </div>
    );
};

export default ArtilceList;