class ApiFeatures {
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search(){
        const keyword = this.queryStr.keyword ? {
            name:{
                $regex: this.queryStr.keyword,
                $options: "i",
            }
        }:{}


        this.query = this.query.find({...keyword});
        return this;
    }

    filter(){
        const queryCopy = {...this.queryStr}


        // Removing some field for category
        const removeFields = ["keyword", "page", "limit"];

        removeFields.forEach(key=>delete queryCopy[key]);

        // Filter for Price and Rating 

        console.log(queryCopy);

        let queryStr = JSON.stringify(queryCopy);

        queryStr = queryStr.replace(
        /\b(gte|gt|lte|lt)\b/g,
        key => `$${key}`
    );

        

        this.query = this.query.find(JSON.parse(queryStr)); 

        console.log(queryStr)
        return this; 

    }
}

module.exports = ApiFeatures; 