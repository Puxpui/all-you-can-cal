import React, { useState } from 'react';
import Layout from '../Layout';
import { circlecalculator, trianglecalculator, rectanglecalculator, clear } from './calculator/areacalculate';

function AreaCal() {
  const [selectedShape, setSelectedShape] = useState('');

  const handleShapeSelection = (shape) => {
    clear();
    setSelectedShape(shape);
  };

  return (
    <Layout>
      <div className='font-ctfont text-lg text-gray-700'>
        <div className='flex justify-center gap-8 mt-15'>
          <button
            onClick={() => handleShapeSelection('circle')}
            id='circlebtn'
            className={`btn font-semibold text-base bg-white text-black hover:border border-transparent hover:border-transparent rounded-full mt-4 ${selectedShape === 'circle' ? 'bg-violet-300' : ''}`}
          >
            วงกลม
          </button>
          <button
            onClick={() => handleShapeSelection('triangle')}
            id='trianglebtn'
            className={`btn font-semibold text-base bg-white text-black hover:border border-transparent hover:border-transparent rounded-full mt-4 ${selectedShape === 'triangle' ? 'bg-violet-300' : ''}`}
          >
            สามเหลี่ยม
          </button>
          <button
            id='rectanglebtn'
            onClick={() => handleShapeSelection('rectangle')}
            className={`btn font-semibold text-base bg-white text-black hover:border border-transparent hover:border-transparent rounded-full mt-4 ${selectedShape === 'rectangle' ? 'bg-violet-300' : ''}`}
          >
            สี่เหลี่ยม
          </button>
        </div>

        {/* cir */}
        {selectedShape === 'circle' && (
          <div>
            <div className='flex justify-center mt-20 mb-8'>
              <p className='absolute'>รัศมีของวงกลม</p>
            </div>
            <div className='flex justify-center gap-4'>
              <input
                type='number'
                id='cirredius'
                className='[&::-webkit-inner-spin-button]:appearance-none text-black rounded-full border-2 border-violet-300 focus:border-violet-300 input max-w-xs bg-opacity-0 focus:outline-none'
              />
            </div>
          </div>
        )}

        {/* tri */}
        {selectedShape === 'triangle' && (
          <div>
            <div className='flex justify-center mt-24 mb-8'>
              <p className='absolute mr-60'>ฐานของสามเหลี่ยม</p>
              <p className='absolute ml-60'>ความสูงของสามเหลี่ยม</p>
            </div>
            <div className='flex justify-center gap-4'>
              <input
                type='number'
                id='tribase'
                className='[&::-webkit-inner-spin-button]:appearance-none text-black rounded-full border-2 border-violet-300 focus:border-violet-300 input max-w-xs bg-opacity-0 focus:outline-none'
              />
              <input
                type='number'
                id='triheight'
                className='[&::-webkit-inner-spin-button]:appearance-none text-black rounded-full border-2 border-violet-300 focus:border-violet-300 input max-w-xs bg-opacity-0 focus:outline-none'
              />
            </div>
          </div>
        )}

        {/* rect */}
        {selectedShape === 'rectangle' && (
          <div>
            <div className='flex justify-center mt-24 mb-8'>
              <p className='absolute mr-60'>ความกว้างของสี่เหลี่ยม</p>
              <p className='absolute ml-60'>ความยาวของสี่เหลี่ยม</p>
            </div>
            <div className='flex justify-center gap-4'>
              <input
                type='number'
                id='rectwidth'
                className='[&::-webkit-inner-spin-button]:appearance-none text-black rounded-full border-2 border-violet-300 focus:border-violet-300 input max-w-xs bg-opacity-0 focus:outline-none'
              />
              <input
                type='number'
                id='rectlength'
                className='[&::-webkit-inner-spin-button]:appearance-none text-black rounded-full border-2 border-violet-300 focus:border-violet-300 input max-w-xs bg-opacity-0 focus:outline-none'
              />
            </div>
          </div>
        )}

        <div className='flex justify-center'>
          {selectedShape === 'circle' && (
            <button
              onClick={circlecalculator}
              id='areacircal'
              className='btn font-semibold text-base bg-white text-black hover:border border-transparent hover:border-transparent rounded-full mt-8'
            >
              คำนวณพื้นที่วงกลม
            </button>
          )}

          {selectedShape === 'triangle' && (
            <button
              onClick={trianglecalculator}
              id='areatrical'
              className='btn font-semibold text-base bg-white text-black hover:border border-transparent hover:border-transparent rounded-full mt-8'
            >
              คำนวณพื้นที่สามเหลี่ยม
            </button>
          )}
          {selectedShape === 'rectangle' && (
            <button
              onClick={rectanglecalculator}
              id='areareccal'
              className='btn font-semibold text-base bg-white text-black hover:border border-transparent hover:border-transparent rounded-full mt-8'
            >
              คำนวณพื้นที่สี่เหลี่ยม
            </button>
          )}
          {selectedShape === 'circle' && (
            <div className='absolute'>(เซนติเมตร)</div>
          )}
          {selectedShape === 'triangle' && (
            <div className='absolute'>(เซนติเมตร)</div>
          )}
          {selectedShape === 'rectangle' && (
            <div className='absolute'>(เซนติเมตร)</div>
          )}
        </div>
        <div className='flex justify-center'>
          <div id='cirresult' className="flex absolute justify-center mt-8 text-lg font-bold"></div>
          <div id='triresult' className="flex absolute justify-center mt-8 text-lg font-bold"></div>
          <div id='rectresult' className="flex absolute justify-center mt-8 text-lg font-bold"></div>
        </div>
      </div>
    </Layout>
  );
}

export default AreaCal;
