'use client'
import { ModeToggle } from '@/components/interactive/ModeToggle';
import Middle from '@/components/layouts/Middle';
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '@/redux/modules/example/exampleSlice';
import { RootState } from '@/redux/index';
export default function Home() {

    const count = useSelector((state: RootState) => state.example.value);
    const dispatch = useDispatch();

    return (
        <>
            <Middle X Y className="w-full h-full p-4">
                <>
                    <ModeToggle />
                    <div className='mt-5'>
                        <div>Count : {count}</div>
                        <button style={{ fontSize: "24px" }} className='m-1 p-4 bg-blue-400 rounded-lg' onClick={() => dispatch(increment())}>
                            Increment value
                        </button>
                        <button style={{ fontSize: "24px" }} className='m-1 p-4 bg-blue-400 rounded-lg' onClick={() => dispatch(decrement())}>
                            Decrement value
                        </button>
                    </div>
                </>
            </Middle>
        </>
    );
}
