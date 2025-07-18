import React, { useEffect, useState } from 'react';
import { formatPrice } from '../../utils/formatter';
import * as quotesStore from '../../store/quotesStore';
import eventBus, { EVENT_TYPES } from '../../utils/eventBus';

const scriptNames = {
  nifty: 'NIFTY',
  banknifty: 'BANKNIFTY',
  sensex: 'SENSEX',
  indiavix: 'INDIAVIX',
};

const HeaderScriptComponent = ({ scriptId }) => {
  const [data, setData] = useState(() => quotesStore.getQuote(scriptId) || {});

  useEffect(() => {
    const unsubscribe = eventBus.on(EVENT_TYPES.QUOTE_UPDATE, scriptId, () => {
      setData(quotesStore.getQuote(scriptId) || {});
    });
    setData(quotesStore.getQuote(scriptId) || {});
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, [scriptId]);

  if (!data) return null;

  const { price, change } = data;
  const isPositive = change >= 0 || !change;
  const color = isPositive ? 'text-price-green' : 'text-price-red';

  return (
    <div className="flex flex-col items-center justify-center text-xs md:text-sm text-white px-2">
      <div className="font-semibold text-neutral-400">{scriptNames[scriptId] || scriptId}</div>
      <div className={`font-bold flex gap-1 items-center ${color}`}>
        <span>{formatPrice(price)}</span>
        <span className="text-xs">({change > 0 ? '+' : ''}{formatPrice(change)})</span>
      </div>
    </div>
  );
};

export default HeaderScriptComponent;