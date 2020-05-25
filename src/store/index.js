import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        temporaryUser: {
            userName: 'user',
            password: '123',
        },
        loginUser: null,
        logout: false,
        searchResult: '',
        randomImageId: null,
        randomQuotes: [
            '“If you’re afraid of butter, use cream.” -Julia Child',
            '“First we eat, then we do everything else.” -M.F.K. Fisher',
            '“Life is uncertain. Eat dessert first.” -Ernestine Ulmer',
            '“You don’t need a silver fork to eat good food.” -Paul Prudhomme',
            '“We all eat, and it would be a sad waste of opportunity to eat badly.” -Anna Thomas',
            '“A balanced diet is a cookie in each hand.” -Barbara Johnson',
            '“People who love to eat are always the best people. - Julia Child”',
            '“One cannot think well, love well, sleep well, if one has not dined well.” -Virginia Woolf',
            '“There is no sincerer love than the love of food.” -George Bernard Shaw',
            '“Vegetables are a must on a diet. I suggest carrot cake, zucchini bread and pumpkin pie.” -Jim Davis'
        ],
        randomQuote: '',
        recipes: [
            {
                title: 'Pizza',
                description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, suscipit.',
                source: 'https://i.picsum.photos/id/640/200/300.jpg',
                favorite: false,
                id: 1
            },
            {
                title: 'Pasta Bolognese',
                description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, suscipit.',
                source: 'https://i.picsum.photos/id/631/200/300.jpg',
                favorite: false,
                id: 2
            },
            {
                title: 'Vegetarian Lasagne',
                description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, suscipit.',
                source: 'https://i.picsum.photos/id/111/200/300.jpg',
                favorite: false,
                id: 3
            },
            {
                title: 'Risotto with Seafood',
                description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, suscipit.',
                source: 'https://i.picsum.photos/id/9/200/300.jpg',
                favorite: false,
                id: 4
            },
            {
                title: 'Fish & Chips',
                description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, suscipit.',
                source: 'https://i.picsum.photos/id/312/200/300.jpg',
                favorite: false,
                id: 5
            }
        ],
        randomRecipe: null,
        filteredRecipe: null
    },

    getters: {
        getAllRecipes: state => {
            state.randomImageId = Math.floor(Math.random() * 1001);
            return state.recipes;
        },

        getRandomRecipe: state => {
            return state.randomRecipe;
        },

        searchResult: state => {
            const result = state.recipes.filter(recipe => {
                return state.searchResult.toLowerCase().match(recipe.title.toLowerCase());
            });
            return result;
        },

        favoriteRecipes: state => {
            const favorite = state.recipes.filter(recipe => {
                return recipe.favorite ? recipe : null;
            });
            return favorite;
        },

        randomQuote: state => {
            return state.randomQuote;
        },

        login: state => {
            return state.loginUser;
        },

        getFilteredRecipe: state => {
            return state.filteredRecipe;
        }
    },

    mutations: {
        deleteRecipe: (state, id) => {
            state.recipes.filter(recipe => {
                if (recipe.id === id) {
                    const index = state.recipes.indexOf(recipe);
                    state.recipes.splice(index, 1);
                }
            });
        },

        addNewRecipe: (state, newRecipe) => {
            state.recipes.push(newRecipe);
        },

        searchRecipe: (state, searchRecipe) => {
            state.searchResult = searchRecipe;
        },

        updateList: (state, addFavoriteRecipe) => {
            state.recipes.forEach(recipe => {
                if (recipe.id === addFavoriteRecipe.id) {
                    recipe = addFavoriteRecipe;
                }
            });
        },

        shuffleQuote: state => {
            const randomQuote = state.randomQuotes.sort(() => Math.random() - 0.5);
            state.randomQuote = randomQuote[0];
        },

        setRandomRecipe: state => {
            const shuffledRecipes = state.recipes.sort(() => Math.random() - 0.5);
            state.randomRecipe = [shuffledRecipes[0]];
        },

        loginValidation: (state, user) => {
            if (user.userName === state.temporaryUser.userName &&
                user.password === state.temporaryUser.password) {
                state.loginUser = true;
                localStorage
            } else {
                state.loginUser = false;
            }
        },

        logout: (state) => {
            state.loginUser = false;
        },

        filterRecipe: (state, filter) => {
            const copyRecipeList = [...state.recipes];

            if (filter.title) {
                state.filteredRecipe = copyRecipeList.sort((a, b) => {
                    if (a.title < b.title) {
                        return -1;
                    }
                    if (a.title > b.title) {
                        return 1;
                    }
                    return 0;
                });
            }

            if (!filter.title && !filter.favorites) {
                state.filteredRecipe = null;
            }

            if (filter.favorites) {
                state.filteredRecipe = copyRecipeList.sort((a, b) => {
                        return  a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1;
                });
            }

            if (!filter.favorites && !filter.title) {
                state.filteredRecipe = null;
            };
        }
    },

    actions: {},
    modules: {}
});
