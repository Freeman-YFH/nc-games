import { useEffect, useState } from "react";
import * as api from "./api";

export const CategoriesBar = ({ setDisplayCategories }) => {
    const [categoryApi, setCategoryApi] = useState([]);
    const [selectCategory, setSelectCategory] = useState("");

    useEffect(() => {
        api.fetchCategory().then((category) => {
            setCategoryApi(category)
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayCategories(selectCategory)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="category">Category</label>
                <select id="category"
                    value={selectCategory}
                    onChange={(e) => setSelectCategory(e.target.value)}
                >
                    <option value="all">all</option>
                    {categoryApi.map(cat => {
                        return <option value={cat.slug} key={cat.slug}>{cat.slug}</option>
                    })}
                </select> {" "}
                <button type="submit">submit</button>
            </form>
        </div>
    );
};
