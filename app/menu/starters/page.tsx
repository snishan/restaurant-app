'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import { fetchMenu } from '@/lib/store/reducers/menuSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Loader from '@/components/ui/loader';

export default function MenuPage() {
  const dispatch = useDispatch();
  const { menu, loading } = useSelector((state: RootState) => state.menu);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Menu Management</h1>
      <div className="space-y-8">
        {menu.filter((data) => data.category === "Starters").map((category) => (
          <div key={category.id}>
            <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <LazyLoadImage
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover object-center"
                    effect="blur"
                    width={510}
                    placeholderSrc="path-to-placeholder-image.jpg" // Optional: You can add a placeholder image here
                    loading="lazy"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{item.name}</h3>
                      <span className="font-semibold">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
