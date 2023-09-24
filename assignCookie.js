/* Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number. */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    s.sort((a, b) => (a - b));
    g.sort((a, b) => (a - b));
    let j = 0;
    let res = 0;
    for (let cookieSize of s) {
        if (cookieSize >= g[j]) {
            res++;
            j++
        }
    }
    return res
};