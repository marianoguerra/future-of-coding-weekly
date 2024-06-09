{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/nixos-24.05.tar.gz") {} }:

pkgs.mkShell {
  LOCALE_ARCHIVE_2_27 = if (pkgs.glibcLocales != null) then "${pkgs.glibcLocales}/lib/locale/locale-archive" else "";
  buildInputs = [
    pkgs.glibcLocales
    pkgs.gnumake
    pkgs.python312
    pkgs.python312Packages.pip
    pkgs.python312Packages.nikola
    pkgs.python312Packages.virtualenv
    pkgs.nodejs
    pkgs.git
    pkgs.sqlite
    pkgs.vscode-langservers-extracted
    pkgs.nodePackages.eslint
    pkgs.nodePackages.prettier
  ];
  shellHook = ''
    export LC_ALL=en_US.UTF-8
    npm install
    export PATH=$PWD/node_modules/.bin:$PATH
    export EDITOR=hx
    source ./venv/bin/activate
    deno run remindme.js
    nu
  '';
}
