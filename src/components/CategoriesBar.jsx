import { useEffect, useState } from "react";
import * as api from "./api";
import { useNavigate } from "react-router-dom";

export const CategoriesBar = ({ setDisplayCategories }) => {
    const [categoryApi, setCategoryApi] = useState([]);
    const [selectCategory, setSelectCategory] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        api.fetchCategory().then((category) => {
            setCategoryApi(category)
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const displayCategoriesObj = {
            selectCategory: selectCategory
        }
        setDisplayCategories(displayCategoriesObj)
        navigate(`/reviews/categories/${selectCategory}`)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="category">Category</label>
                <select id="category"
                    value={selectCategory}
                    onChange={(e) => setSelectCategory(e.target.value)}
                >
                    <option value="">all</option>
                    {categoryApi.map(cat => {
                        return <option value={cat.slug} key={cat.slug}>{cat.slug}</option>
                    })}
                </select> {" "}
                <button type="submit">submit</button>
            </form>
        </div>
    );
}
