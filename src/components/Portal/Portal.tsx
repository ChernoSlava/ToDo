import React from 'react';
import { createPortal } from 'react-dom';

/** Создает портал
 *
 * @description если domNode не указан, то пытается привязаться к #ui-orchestrator-service, если не нахоит то к document.body
 */
export const Portal: React.FC<{
  children: React.ReactNode;
  domNode: Element;
}> = ({ children, domNode }): React.ReactPortal | null => {
  const node = domNode || document.getElementById('root') || document.body;

  return node && createPortal(children, node);
};
