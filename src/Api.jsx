import React from "react";

const Api = [
    {
      id: 1,
      title: 'Easy Pasta Bowls Anyone Can Make',
      type:'Desserts',
      content: 'For as rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus elit non arcu hendrerit rhoncus. Pellentesque dignissim volutpat orci at interdum. In id ipsum volutpat.For as rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus elit non arcu hendrerit rhoncus.',
      image: 'https://gutentype.ancorathemes.com/wp-content/uploads/2021/01/food-section-3-1-copyright.jpg',
      date:'20 Jan 2025'
    },
    {
      id: 2,
      title: 'Tomato-Basil Soup with Chickpeas',
      content: 'For as rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus elit non arcu hendrerit rhoncus. Pellentesque dignissim volutpat orci at interdum. In id ipsum volutpat.For as rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus elit non arcu hendrerit rhoncus.',
      type:'Desserts',
      image: 'https://gutentype.ancorathemes.com/wp-content/uploads/2021/01/food-section-3-5-copyright-760x598.jpg',
      date:'19 Jan 2025'
    },
    {
      id: 3,
      type:'Meal',
      title: 'Easy Weeknights Meals to Make Kids Happy',
      content: 'For as rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus elit non arcu hendrerit rhoncus. Pellentesque dignissim volutpat orci at interdum. In id ipsum volutpat.For as rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus elit non arcu hendrerit rhoncus.',
      image: 'https://gutentype.ancorathemes.com/wp-content/uploads/2021/01/food-section-3-7-copyright-760x666.jpg',
      date:'11 Jan 2025'
    },
    {
        id: 4,
        type:'Desserts',
        title: 'Homemade Panna Cotta with Fresh Berries',
        content: 'For as rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus elit non arcu hendrerit rhoncus. Pellentesque dignissim volutpat orci at interdum. In id ipsum volutpat.For as rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus elit non arcu hendrerit rhoncus.',
        image: 'https://gutentype.ancorathemes.com/wp-content/uploads/2021/01/food-section-3-6-copyright-760x839.jpg',
        date:'09 Jan 2025'
      },
      {
        id: 5,
        type:'Desserts',
        title: 'Your Favoutite French Toasts on Sundays',
        content: 'For as rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus elit non arcu hendrerit rhoncus. Pellentesque dignissim volutpat orci at interdum. In id ipsum volutpat.For as rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus elit non arcu hendrerit rhoncus.',
        image: 'https://gutentype.ancorathemes.com/wp-content/uploads/2021/01/food-section-3-8-copyright-760x667.jpg',
        date:'01 Jan 2025'
      },
      {
        id: 100,
        type:'Meal',
        content: 'For as rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus elit non arcu hendrerit rhoncus. Pellentesque dignissim volutpat orci at interdum. In id ipsum volutpat.For as rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus elit non arcu hendrerit rhoncus.',
        title: 'Quick Green Pasta Salad',
        image: 'https://gutentype.ancorathemes.com/wp-content/uploads/2021/01/food-section-4-5-copyright.jpg',
        date:'29 Jan 2025'
      },
      {
        id: 101,
        liked:true,
        type:'Avocado',
        content: 'For as rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus elit non arcu hendrerit rhoncus. Pellentesque dignissim volutpat orci at interdum. In id ipsum volutpat.For as rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus elit non arcu hendrerit rhoncus.',
        title: 'Easy Slow Cooker Dinners',
        image: 'https://gutentype.ancorathemes.com/wp-content/uploads/2021/01/food-section-2-2-copyright.jpg',
        date:'01 Jan 2025'
      },
      {
        id: 102,
        type:'Fish',
        title: 'Burgers Around the World',
        content: 'For as rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus elit non arcu hendrerit rhoncus. Pellentesque dignissim volutpat orci at interdum. In id ipsum volutpat.For as rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna, quis rutrum mi semper non. Cras rhoncus elit non arcu hendrerit rhoncus.',
        image: 'https://gutentype.ancorathemes.com/wp-content/uploads/2021/01/food-section-2-3-copyright.jpg',
        date:'05 Jan 2025'
      }
  ];
  
  export const fetchPosts = async () => {

    return Api;
  };