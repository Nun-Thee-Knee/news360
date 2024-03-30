import React from 'react';

const NewsItem = (props) => {
  return (
    <div className='relative cursor-pointer hover:scale-105 duration-100 bg-slate-200 h-auto w-auto rounded-xl border-slate-900 border-2'>
      <a href={props.url} className="block">
        <span className='absolute top-[-10px] right-[-10px] bg-red-600 text-white font-bold rounded-xl px-2 py-1'>{props.source}</span>
        <img className='h-2/3 w-full rounded-t-xl' src={props.image==null?"https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=0&k=20&c=9rVQfrUGNtR5Q0ygmuQ9jviVUfrnYHUHcfiwaH5-WFE=":props.image} alt="" />
        <div className='m-5'>
          <center>
            <b className='font-extrabold text-xl block text-center'>{props.title}</b>
            <p className='font-semibold text-center'>
            {props.description}
            </p>
            <h1 className='mt-1 font-bold text-zinc-700'>Published At: {props.date.slice(0,10)}</h1>
          </center>
        </div>
      </a>
    </div>
  );
}

export default NewsItem;
