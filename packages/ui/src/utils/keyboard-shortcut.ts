import type { MergedModifierCode, MergedNormalCode } from 'super-hotkey';

import { Platform } from './platform';

export function modifierKeyBeautify(key: MergedModifierCode | AnyString): string {
  switch (key) {
    case 'Mod':
      return Platform.isMacos ? 'cmd' : 'ctrl';
    case 'Meta':
      return Platform.isMacos ? 'cmd' : 'win';
    default:
      return key.toLocaleLowerCase();
  }
}

export function normalKeyBeautify(key: MergedNormalCode | AnyString): string {
  return key.toLocaleLowerCase();
}

export function modifierKeysReorder(
  modifiers: MergedModifierCode[]
): MergedModifierCode[] {
  const modifierKeyPriorityMap: Record<MergedModifierCode, number> = {
    Meta: 0,
    MetaLeft: 0,
    MetaRight: 0,
    Mod: 0,
    Control: 1,
    Ctrl: 1,
    ControlLeft: 1,
    ControlRight: 1,
    '⌃': 1,
    Alt: 2,
    AltLeft: 2,
    AltRight: 2,
    '⌥': 2,
    Shift: 3,
    ShiftLeft: 3,
    ShiftRight: 3,
    '⇧': 3
  };

  return modifiers.sort((a, b) => modifierKeyPriorityMap[a] - modifierKeyPriorityMap[b]);
}
